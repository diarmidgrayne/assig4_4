var backgroundMusic = document.getElementById("background-music");
var muteBtn = document.getElementById("mute-btn");

// Function to toggle mute/unmute
function toggleMute() {
  if (backgroundMusic.muted) {
    // If muted, unmute the music
    backgroundMusic.muted = false;
    muteBtn.textContent = "Mute";
  } else {
    // If not muted, mute the music
    backgroundMusic.muted = true;
    muteBtn.textContent = "Unmute";
  }
}



