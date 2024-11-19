import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t (2), e (1), s (2), t (2)
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0); // No characters = 0 points
  });

  it("handles strings with non-alphanumeric characters", () => {
    const word = "t3st!";
    const points = pointsForWord(word);
    expect(points).toBe(9); // t (2), 3 (2), s (2), t (2), ! (1)
  });

  it("throws an error if input is not a string", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
  });
});
