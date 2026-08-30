const letters = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"
];


function alphabetPosition(text) {
  let myText = text.replace(/[A-Z]/g, char => char.toLowerCase())
  .match(/[a-z]/g) || [];

  let loopResult = "";
  
  myText.forEach(char => {
    let charNumber = letters.findIndex(letter => letter == char);
    charNumber ++;
    loopResult += ` ${charNumber}`;
  });

  return loopResult.trimStart();
}