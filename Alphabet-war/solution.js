const alphabet = [
  { letter: "w", side: "left", power: 4 },
  { letter: "p", side: "left", power: 3 },
  { letter: "b", side: "left", power: 2 },
  { letter: "s", side: "left", power: 1 },
  
  { letter: "m", side: "right", power: 4 },
  { letter: "q", side: "right", power: 3 },
  { letter: "d", side: "right", power: 2 },
  { letter: "z", side: "right", power: 1 }
];

function alphabetWar(fight)
{
  let leftSumPower = 0;
  let rightSumPower = 0;
  
  for(const char of fight) {
    let characterObject = alphabet.find(letter => letter.letter === char) || { side: "none" };
    if(characterObject.side == "left") leftSumPower += characterObject.power;
    if(characterObject.side == "right") rightSumPower += characterObject.power;
  }
  
  if(leftSumPower > rightSumPower) return "Left side wins!";
  if (rightSumPower > leftSumPower) return "Right side wins!";
  return "Let's fight again!";
}