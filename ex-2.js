let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.filter(words=> words.length >=5);
  // Start coding here
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
