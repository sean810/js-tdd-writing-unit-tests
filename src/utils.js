export function pointsForWord(word) {
    // Ensure input is a string
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    let points = 0;
  
    // Iterate through each character and calculate points
    for (const char of word) {
      if (/[a-zA-Z]/.test(char)) {
        // Letters: Vowels +1, Consonants +2
        points += /[aeiou]/i.test(char) ? 1 : 2;
      } else if (/\d/.test(char)) {
        // Numbers: Add 2 points
        points += 2;
      } else {
        // Other characters: Add 1 point
        points += 1;
      }
    }
  
    return points;
  }
  