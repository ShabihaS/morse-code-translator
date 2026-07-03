# 🌐 Morse Code Translator

A simple and responsive web app that translates between **English text and Morse code**.  
It also includes an **auto-detect feature** that automatically identifies the input language and converts it accordingly.

---

## 🚀 Features

- 🔤 Translate English → Morse Code
- 📡 Translate Morse Code → English
- 🤖 Auto-detect input language
- 🧹 Handles extra spaces and formatting issues
- 🧪 Unit tested with Jest
- 🎨 Clean neon-glass UI (responsive design)

---

## 🖥️ Demo

Type text or Morse code in the input box and click:

- “Translate to Morse”
- “Translate to English”
- “Auto Detect”

---

## 📸 UI Preview

*(Add screenshot here if needed)*

---

## 📂 Project Structure
.
├── index.html
├── css/
│   └── main.scss

├── scripts/
│   ├── script.js
│   ├── translator.js
│   ├── dictionary.js
│   └── test.js

├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _reset.scss
│   ├── _normalize.scss
│   ├── _translator.scss
│   └── _media.scss

└── README.md

## ⚙️ How It Works

### English → Morse
Each letter is converted using a dictionary and separated by spaces.  
Words are separated using `/`.

### Morse → English
Morse code is split by `/` for words and spaces for letters.

---

## 🤖 Auto Detect Feature

The app automatically detects input type:

- If input contains only `.` `-` `/` → Morse → English
- Otherwise → English → Morse

---

## 🧪 Testing

This project uses **Jest** for unit testing.

### Run tests:

```bash
npm install
npm test
Tests include:
English → Morse conversion
Morse → English conversion
Word separation handling
🧠 Edge Cases Handled
Extra spaces between words
Invalid characters (ignored or safely handled)
Empty input
🛠️ Technologies Used
HTML5
SCSS (BEM structure)
JavaScript (ES Modules)
Jest (unit testing)
📌 Future Improvements
🔊 Morse code sound playback
✨ Typing animation effect
📱 Better mobile UX enhancements
📋 Copy-to-clipboard button
👨‍💻 Author

Built as a frontend learning project to practice:

JavaScript logic
DOM manipulation
SCSS architecture
Unit testing with Jest