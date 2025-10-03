// Solution 1
/**
 * @param {string} s
 * @returns {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const mapper = new Map();
//   const wordLength = s.length;

//   let longestLength = 0;
//   for (let index = 0; index < wordLength; index++) {
//     const char = s.charAt(index);

//     if (mapper.has(char)) {
//       const indexOfMatch = mapper.get(char);

//       mapper.forEach((savedCharIndex, key) => {
//         if (savedCharIndex <= indexOfMatch) {
//           mapper.delete(key);
//         }
//       });
//     }

//     mapper.set(char, index);
//     if (longestLength < mapper.size) {
//       longestLength = mapper.size;
//     }
//   }

//   return longestLength;
// };

// Solution 2

/**
 * @param {string} s
 * @returns {number}
 */
var lengthOfLongestSubstring = function (s) {
  const mapper = new Map();
  const wordLength = s.length;

  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < wordLength; right++) {
    const char = s.charAt(right);
    if (mapper.has(char)) {
      const savedCharIndex = mapper.get(char);
      left = Math.max(savedCharIndex + 1, left);
    }
    maxLength = Math.max(maxLength, right - left + 1);
    mapper.set(char, right);
  }

  return maxLength;
};

/**
 *
 * @param {string} word
 * @param {number} expected
 * @returns {{word:string, expected:number}}
 */
const createExample = (word, expected) => ({
  word,
  expected,
});

// Output tests
const tests = [
  createExample("abcabcbb", 3),
  createExample("bbbbb", 1),
  createExample("pwwkew", 3),
  createExample("dvdf", 3),
  createExample("abba", 2),
];

const output = tests.map((test) => {
  const { word, expected } = test;
  const result = lengthOfLongestSubstring(word);
  return {
    Word: word,
    Length: result,
    Passed: result === expected ? "✅" : "❌",
  };
});

console.table(output);
