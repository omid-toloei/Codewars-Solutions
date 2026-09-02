function isIsogram(str) {
  let firstArray = str.toLowerCase().match(/[a-z]/g) || [];
  let uniqueArray = [...new Set(firstArray)];

  if(uniqueArray.length < firstArray.length) return false;
  return true;
}