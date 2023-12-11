const playButton = document.querySelector("[data-play]");
const audio = document.querySelector("[data-audio]");
const range = document.querySelector("[data-range]");
const time = document.querySelector("[data-time]");

playButton.addEventListener("click", () => switchButton());

function switchButton() {
     if (playButton.className == "play") {
          playButton.src = "/images/pause-button.png";
          audio.play();
          playButton.classList.add("pause");
          playButton.classList.remove("play");

          if (audio.play()) {
               setInterval(() => {
                    range.value = audio.currentTime;

                    if (audio.currentTime < 10) {
                         time.innerText = "0" + Math.floor(audio.currentTime);
                    } else {
                         time.innerText = Math.floor(audio.currentTime);
                    }
               }, 500);
          }

          range.addEventListener(
               "click",
               () => (audio.currentTime = range.value)
          );
     } else if (playButton.className == "pause") {
          playButton.src = "/images/play-button.webp";
          playButton.classList.add("play");
          playButton.classList.remove("pause");
          audio.pause();
     }
}
