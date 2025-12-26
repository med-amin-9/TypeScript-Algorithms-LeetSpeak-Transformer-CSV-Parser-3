# 🚀 TypeScript Algorithm – LeetSpeak & CSV Parser

A small, well-tested TypeScript project showcasing **clean functional design**, **test-driven development**, and **string/array processing algorithms**.  
The project focuses on implementing and testing core algorithms without unnecessary abstractions, following modern JavaScript/TypeScript best practices.

---

## 📌 Overview

This project contains two independent algorithmic components:

1. **LeetSpeak Transformer**  
   Converts text into LeetSpeak using deterministic character-mapping rules.

2. **Simple CSV Parser**  
   Parses a CSV-formatted string into a structured two-dimensional array.

The implementation emphasizes:
- Pure functions
- Clear constraints
- Robust error handling
- High automated test coverage

---

## ✨ Features

### 🔤 LeetSpeak Transformation
- Character-by-character transformation using predefined rules  
- Case-insensitive mapping (e.g. `A → 4`, `E → 3`, `S → 5`)  
- Three implementations:
  - Single-character transformation
  - Iterative full-string transformation
  - Recursive full-string transformation
- Strict input validation (errors on invalid input)

### 📄 Simple CSV Parsing
- Converts CSV text into `string[][]`
- Supports:
  - Empty values
  - Empty lines
  - Trailing commas
  - Lines with different column counts
- Conforms to a simplified interpretation of RFC 4180

---

## 🧠 Technical Highlights

- Functional programming style (no unnecessary classes)
- Iterative vs. recursive algorithm comparison
- Extensive use of the JavaScript String API
- Test-driven development (TDD)
- ≥95% statement coverage with Jest

---

## 📂 Project Structure

```
/src
  ├── leetSpeak.ts
  └── simpleCSV.ts

/tests
  ├── leetSpeakSingleLetter.test.ts
  ├── leetSpeakIter.test.ts
  ├── leetSpeakRek.test.ts
  ├── simpleCSV.test.ts
  └── formalities.test.ts
```

---

## 🛠 Getting Started

### Install dependencies
```bash
npm install
```

### Run tests
```bash
npm test
```

### Build the project
```bash
npm run build
```

---

## 🧪 Testing & Coverage

- Comprehensive Jest test suite
- Covers normal cases, edge cases, and error conditions
- Enforced method signatures and file structure via formal tests
- ≥95% statement coverage

---

## 🧰 Tech Stack

- TypeScript
- Node.js
- Jest
- tsc

---
