/**
 * Monitors how long the spacebar is held down.
 * Logs the duration in milliseconds to the console.
 */
function trackSpacebarHold() {
  let startTime = 0;
  let isPressed = false;

  // Listen for the initial press
  window.addEventListener('keydown', (event) => {
    // Check if the key is Space and if it's not already being tracked
    if (event.code === 'Space' && !isPressed) {
      isPressed = true;
      startTime = performance.now();
      console.log("Spacebar pressed...");
    }
  });

  // Listen for the release
  window.addEventListener('keyup', (event) => {
    if (event.code === 'Space' && isPressed) {
      const duration = performance.now() - startTime;
      isPressed = false;
      
      console.log(`Spacebar held for: ${duration.toFixed(2)}ms`);
    }
  });
}

// Initialize the tracker
trackSpacebarHold();