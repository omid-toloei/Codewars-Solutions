# Stop Spinning My Words

My solution to the **"Stop gninnipS My sdroW!"** kata from Codewars.

## 📌 Challenge

* **Platform:** Codewars
* **Rank:** 6 kyu
* **Topics:** Strings, Arrays, Fundamentals

## 💡 How It Works

The function reverses every word that has **5 or more characters**, while keeping shorter words unchanged.

* The string is split into an array of words using `split()`.
* `map()` checks each word and creates a new array.
* If a word has 5 or more characters, it is reversed using `split()`, `reverse()`, and `join()`.
* Shorter words are returned unchanged.
* Finally, `join()` combines all the words back into a single string.

For example:

```text
"Hey fellow warriors" → "Hey wollef sroirraw"
"This is a test" → "This is a test"
"Welcome" → "emocleW"
```

## 🔗 Codewars

[View the kata on Codewars](https://www.codewars.com/kata/5264d2b162488dc400000001)
