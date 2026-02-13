The Unit Converter web app consists of converting basic metric units into imperial units.

---
## WORK IN PROGRESS
---
## Live Demo : https://dafinlaw.github.io/unit-converter/


---
This repository contains a small client-side Unit Converter that converts between:

- Length: meters ↔ feet
- Volume: liters ↔ gallons
- Mass: kilograms ↔ pounds
---
Recent fixes and user-facing behaviour
- Input handling: the value input accepts text and is validated in `script.js`. Empty input shows "Please enter a value to convert." Non-numeric input shows "Please enter a valid number.".
- Enter / submit: the app prevents default form submission and handles Enter so results render without reloading the page.
- Reset: the Reset button clears the input and restores default zero-result strings.
---
Usage

1. Enter a numeric value into the input field.
2. Press the "Convert" button or press Enter to run the conversion.
3. Press "Reset" to clear the input and results.
---

