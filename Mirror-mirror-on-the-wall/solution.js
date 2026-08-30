function mirror(data) {
  let array = [];
  let result = [];
  array = [...data];
  array.sort((a, b) => a - b);
  array.reverse();

  array.forEach((element, index) => {
    if (index == 0) {
      result[0] = element;
    }
    if (index > 0) {
      result.push(element);
      result.unshift(element);
    }
  });

  return result;
}