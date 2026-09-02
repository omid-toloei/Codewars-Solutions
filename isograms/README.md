# Isograms

My solution to the **"Isograms"** kata from Codewars.

## 📌 Challenge

* **Platform:** Codewars
* **Rank:** 7 kyu
* **Topics:** Strings, Arrays, Fundamentals

## 💡 How It Works

The function checks whether a word or string is an isogram, meaning that no letter appears more than once.

* The string is converted to lowercase.
* Only letters from `a` to `z` are extracted.
* A `Set` is used to remove duplicate letters.
* The lengths of the original and unique arrays are compared.
* If the lengths are equal, the string is an isogram.

For example:

```text
"aba" → false
"Dermatoglyphics" → true
"moOse" → false
```

## 🔗 Codewars

[View the kata on Codewars](https://www.codewars.com/kata/54ba84be607a92aa900000f1)
