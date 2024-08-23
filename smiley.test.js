import { countSmileys } from "./smiley";

test("return correct number when countSmileys with valid input", () => {
  expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
  expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  expect(countSmileys([";:]", ":)))"])).toBe(0);
});

test("return 0 when countSmileys with invalid input", () => {
  expect(countSmileys([])).toBe(0);
});
