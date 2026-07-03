import { morseDictionary } from "./dictionary.js";

// English to Morse
export function translateToMorse(text) {
  return text
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(word => word.length > 0) 
    .map(word =>
      word
        .split("")
        .map(char => morseDictionary[char] ?? "")
        .join(" ")
        .trim() 
    )
    .join(" / ");
}

/* Morse to English
 Rules:
 letters separated by spaces
 words separated by "/"*/

export function translateToEnglish(morse) {
  const reverseDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value, key])
  );

  return morse
    .trim()
    .split(" / ")
    .filter(word => word.length > 0) 
    .map((word) =>
      word
        .split(" ")
        .filter(code => code.length > 0) 
        .map((code) => reverseDictionary[code] ?? "")
        .join("")
    )
    .join(" ");
}

//Auto Translator
export function translateAuto(text) {
  const cleaned = text.trim();

  if (isMorse(cleaned)) {
    return translateToEnglish(cleaned);
  } else {
    return translateToMorse(cleaned);
  }
}

function isMorse(text) {
  return /^[.\-\s/]+$/.test(text);
}