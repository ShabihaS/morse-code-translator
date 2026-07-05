import {
  translateToMorse,
  translateToEnglish,
  translateAuto,
} from "./translator.js";

describe("translateToMorse", () => {
  test("translates a single letter", () => {
    expect(translateToMorse("A")).toBe(".-");
  });

  test("translates a single word", () => {
    expect(translateToMorse("HELLO")).toBe(".... . .-.. .-.. ---");
  });

  test("translates multiple words", () => {
    expect(translateToMorse("HI THERE")).toBe(
      ".... .. / - .... . .-. ."
    );
  });

  test("handles lowercase input", () => {
    expect(translateToMorse("hello")).toBe(
      ".... . .-.. .-.. ---"
    );
  });
});

describe("translateToEnglish", () => {
  test("translates a single letter", () => {
    expect(translateToEnglish(".-")).toBe("a");
  });

  test("translates a single word", () => {
    expect(translateToEnglish(".... . .-.. .-.. ---")).toBe("hello");
  });

  test("translates multiple words", () => {
    expect(
      translateToEnglish(".... .. / - .... . .-. .")
    ).toBe("hi there");
  });
});

describe("translateAuto", () => {
  test("automatically translates English to Morse", () => {
    expect(translateAuto("hello")).toBe(
      ".... . .-.. .-.. ---"
    );
  });

  test("automatically translates Morse to English", () => {
    expect(translateAuto(".... . .-.. .-.. ---")).toBe(
      "hello"
    );
  });
});