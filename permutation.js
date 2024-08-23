const uniqueArrayOfString = (arrayOfString) =>
  arrayOfString.filter(
    (element, index, array) => array.indexOf(element) === index
  );

export const createPermutation = (word) => {
  const result = [];

  const shuffle = (remainingChar, permutation = "") => {
    if (permutation.length < word.length) {
      remainingChar.split("").forEach((currentChar, i) => {
        const _remainingChar =
          remainingChar.substring(0, i) + remainingChar.substring(i + 1); // pick out currentChar
        shuffle(_remainingChar, permutation + currentChar);
      });
    } else {
      // word complete
      result.push(permutation);
    }
  };

  shuffle(word);

  return uniqueArrayOfString(result);
};
