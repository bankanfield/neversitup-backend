const isSmileyValid = (input) => {
  if (![2, 3].includes(input.length)) {
    return false;
  }
  const isEyeValid = input[0] === ":" || ";";
  const isNoseValid =
    input.length === 2 ? true : input[1] === "-" || input[1] === "~";
  const isMouthValid =
    input[input.length - 1] === ")" || input[input.length - 1] === "D";
  return isEyeValid && isNoseValid && isMouthValid;
};

export const countSmileys = (input) => {
  if (!input.length) {
    return 0;
  }
  let smileyCount = 0;
  for (const element of input) {
    if (isSmileyValid(element)) {
      smileyCount++;
    }
  }
  return smileyCount;
};
