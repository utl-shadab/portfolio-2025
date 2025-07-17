"use client";

export default function VideoHeroWithTrail() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-fit"
        >
          <source src="/communication.webm" type="video/webm" />
          <source src="/communication.mp4" type="video/mp4" /> {/* Fallback to mp4 */}
          Your browser does not support the video tag.
        </video>

        {/* Black overlay over the video */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h1 className="text-pink-500 text-5xl md:text-7xl font-bold font-space-grotesk text-center leading-tight">
          {`Design your future with us`
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block px-1">
                {word}&nbsp;
              </span>
            ))}
        </h1>
      </div>
    </section>
  );
}