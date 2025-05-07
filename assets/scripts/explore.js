// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const faceImg = document.querySelector("img");
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Select Voice:";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    for (let i = 0; i < voices.length; i++) {
      const voice = voices[i];
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-name", voice.name);
      option.setAttribute("data-lang", voice.lang);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    if (text === "") return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceName =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoiceName) {
        utterance.voice = voices[i];
        break;
      }
    }

    // Open mouth while speaking
    utterance.onstart = () => {
      faceImg.src = "assets/images/smiling-open.png";
    };

    // Revert back after speaking
    utterance.onend = () => {
      faceImg.src = "assets/images/smiling.png";
    };

    synth.speak(utterance);
  });
}