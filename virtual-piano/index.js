// querySelectors -- START
const piano = document.querySelector(".piano");
const pianoКeys = piano.querySelectorAll(".piano-key");
const btnNotes = document.querySelector(".btn-notes");
const btnLetters = document.querySelector(".btn-letters");
// querySelectors -- END

// addEventListeners -- START
piano.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);
window.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
// addEventListeners -- END

// mouse functions -- START
function mouseDown(e) {
  if (e.target.classList.contains("piano-key")) {
    playAudio(`assets/audio/Key${e.target.dataset.letter}.mp3`);
  }
  const key = piano.querySelector(
    `.piano-key[data-letter="${e.target.dataset.letter}"]`
  );
  key.classList.add("piano-key-active");
  key.classList.add("piano-key-active-pseudo");
  key.addEventListener("mouseleave", keyUp, { once: true });
  piano.addEventListener("mouseover", mouseDown);
}

function mouseUp(e) {
  try {
    const key = piano.querySelector(
      `.piano-key[data-letter="${e.target.dataset.letter}"]`
    );
    key.classList.remove("piano-key-active-pseudo");
    key.classList.remove("piano-key-active");
  } catch {}

  piano.removeEventListener("mouseover", mouseDown);
}
// mouse functions -- END

// keyboard functions -- START
let arr = [
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyI",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyO",
  "KeyR",
  "KeyT",
  "KeyU",
];

function keyDown(e) {
  if (e.repeat) return;
  if (arr.indexOf(e.code) > -1) {
    playAudio(`assets/audio/${e.code}.mp3`);
  }
  const key = piano.querySelector(`.piano-key[data-letter="${e.code[3]}"]`);
  try {
    key.classList.add("piano-key-active");
  } catch {}
}

function keyUp(e) {
  const key = piano.querySelector(
    `.piano-key[data-letter="${e.target.dataset.letter || e.code[3]}"]`
  );
  try {
    key.classList.remove("piano-key-active");
    key.classList.remove("piano-key-active-pseudo");
  } catch {}
}
// keyboard functions -- END

// playAudio -- START
playAudio = (src) => {
  const audio = new Audio(src);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};
// playAudio -- END

// buttons -- START
btnLetters.addEventListener("click", () => {
  pianoКeys.forEach((key) => key.classList.add("piano-key-letter"));
  btnLetters.classList.add("btn-active");
  btnNotes.classList.remove("btn-active");
});

btnNotes.addEventListener("click", () => {
  pianoКeys.forEach((key) => key.classList.remove("piano-key-letter"));
  btnNotes.classList.add("btn-active");
  btnLetters.classList.remove("btn-active");
});
// buttons -- END

// fullscreen -- START
const fs = document
  .querySelector(".openfullscreen")
  .addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.fullscreenEnabled) {
        document.exitFullscreen();
      }
    }
  });
// fullscreen -- END
