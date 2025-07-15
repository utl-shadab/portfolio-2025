// Service Worker Registration Script
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      })

      console.log("SW registered: ", registration)

      // Update available
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            // New content is available, show update notification
            if (confirm("New version available! Reload to update?")) {
              window.location.reload()
            }
          }
        })
      })
    } catch (registrationError) {
      console.log("SW registration failed: ", registrationError)
    }
  })

  // Listen for messages from service worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      window.location.reload()
    }
  })
}

// Install prompt for PWA
let deferredPrompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault()
  deferredPrompt = e

  // Show install button or notification
  console.log("PWA install prompt available")
})

// Track PWA installation
window.addEventListener("appinstalled", () => {
  console.log("PWA was installed")
  deferredPrompt = null
})
