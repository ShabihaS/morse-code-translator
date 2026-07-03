import { translateToMorse, translateToEnglish } from "./translator.js";

test("English to Morse conversion", () => {
  expect(translateToMorse("hi there"))
    .toBe(".... .. / - .... . .-. .");
});

test("Morse to English conversion", () => {
  expect(translateToEnglish(".... .. / - .... . .-. ."))
    .toBe("hi there");
});