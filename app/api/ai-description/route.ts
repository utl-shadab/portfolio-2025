import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { projectTitle, projectDescription } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 })
    }

    // Integration with Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Create a concise, engaging 30-second voice description for this project: "${projectTitle}". Description: ${projectDescription}. Focus on key features, technologies used, and impact. Make it sound professional and exciting for a portfolio presentation.`,
                },
              ],
            },
          ],
        }),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to generate AI description")
    }

    const data = await response.json()
    const aiDescription = data.candidates?.[0]?.content?.parts?.[0]?.text || "AI description not available"

    return NextResponse.json({
      description: aiDescription,
      audioUrl: null, // Would integrate with text-to-speech service
    })
  } catch (error) {
    console.error("Error generating AI description:", error)
    return NextResponse.json({ error: "Failed to generate AI description" }, { status: 500 })
  }
}
