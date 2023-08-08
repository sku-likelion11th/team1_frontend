const button = document.querySelector(".voice-button");
const message = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
  console.log(button);
  console.log(message);
  message.lang = "ko-KR";
  message.pitch = 1;
  message.rate = 1;
  message.text = "안녕하세요";
  message.volume = 1;
  window.speechSynthesis.speak(message);

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
