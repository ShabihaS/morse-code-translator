import {
  translateToMorse,
  translateToEnglish,translateAuto
} from "./translator.js";

// Elements
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const toMorseBtn = document.getElementById("toMorseBtn");
const toEnglishBtn = document.getElementById("toEnglishBtn");
const clearBtn = document.getElementById("clearBtn");
const autoBtn = document.getElementById("autoBtn");

// English to Morse
toMorseBtn.addEventListener("click", () => {
  const input = inputText.value;
  
  outputText.value = translateToMorse(input);
});

// Morse to English
toEnglishBtn.addEventListener("click", () => {
  const input = inputText.value;
  outputText.value = translateToEnglish(input);
});

// Clear fields
clearBtn.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
});

// Auto Detect
autoBtn.addEventListener("click", () => {
  const input = inputText.value;
  outputText.value = translateAuto(input);
});