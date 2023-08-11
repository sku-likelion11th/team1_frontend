const button = document.querySelector(".voice-button");
const ttsText = document.getElementById("ttsText");
const stopButton = document.getElementById("stopButton");
const closeArea = document.querySelector(".close-area");

const message = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
  console.log(button);
  console.log(message);
  message.lang = "ko-KR";
  message.pitch = 1;
  message.rate = 1;
  message.text = ttsText.textContent;
  message.volume = 1;
  window.speechSynthesis.speak(message);

  // 버튼 클릭시 tts 출력 멈춤
  stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });
  // ESC 키 눌렀을 때 tts 출력 멈춤
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.speechSynthesis.cancel();
    }
  });
  // 모달 창 닫았을 때 tts 출력 멈춤
  closeArea.addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });

  if (
    typeof SpeechSynthesisUtterance === "undefined" ||
    typeof window.speechSynthesis === "undefined"
  ) {
    alert("음성 재생을 지원하지 않는 브라우저입니다");
    return;
  }
});

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  const voiceList = voices
    .filter((voice) => {
      return voice.lang.includes("en");
    })
    .map((voice) => {
      return `${voice.name} (${voice.lang})`;
    });
  console.log(voiceList);
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
