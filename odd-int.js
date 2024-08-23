export const findOddInt = (input) => {
  const map = new Map();

  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      map.set(input[i], map.get(input[i]) + 1);
    } else {
      // first appearance
      map.set(input[i], 1);
    }
  }

  for (const [num, appearance] of map.entries()) {
    if (appearance % 2 !== 0) {
      // odd
      return num;
    }
  }
};
