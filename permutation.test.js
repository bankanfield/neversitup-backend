import { createPermutation } from "./permutation";

test("return all permutations when createPermutation with given string", () => {
  expect(createPermutation("a")).toStrictEqual(["a"]);
  expect(createPermutation("ab")).toStrictEqual(["ab", "ba"]);
  expect(createPermutation("abc")).toStrictEqual([
    "abc",
    "acb",
    "bac",
    "bca",
    "cab",
    "cba",
  ]);
});

test("return unique permutations when createPermutation with duplicate character string", () => {
  expect(createPermutation("aabb")).toStrictEqual([
    "aabb",
    "abab",
    "abba",
    "baab",
    "baba",
    "bbaa",
  ]);
});
