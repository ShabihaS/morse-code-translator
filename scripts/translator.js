import { morseDictionary } from "./dictionary.js";

//English to Morse
 
export function translateToMorse(text) {
  return text
    .toLowerCase()
    .split("")
    .map((char) => morseDictionary[char] ?? "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
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
    .map((word) =>
      word
        .split(" ")
        .map((code) => reverseDictionary[code] ?? "")
        .join("")
    )
    .join(" ");
}