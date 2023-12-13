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
                    let sec = Math.floor(audio.currentTime % 60);
                    let min = Math.floor(audio.currentTime / 60);

                    if (sec < 10 && min < 10) {
                         sec = "0" + Math.floor(audio.currentTime % 60);
                         min = "0" + Math.floor(audio.currentTime / 60);
                    }
                    time.innerText = sec + ":" + min;
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
