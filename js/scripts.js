// From the text given, pulls the first and last characters of the string
// Returns the two combined
function getFirstLast(text) {
  const first = text.toUpperCase().charAt(0);
  const last = text.toUpperCase().charAt(text.length - 1);

  const combined = first + last;
  return combined;
}

// From a string given, takes the first and last characters, and switches their places. Returns this result.
function reverse(letters) {
  const firstChar = letters.charAt(0);
  const lastChar = letters.charAt(letters.length - 1);

  const left = lastChar;
  const right = firstChar;

  const together = left + right;
  return together;
}

// Prompts user to enter a sentence, then prints to screen.
const result = prompt("Enter a sentence");
alert("Sentence entered was: " + result);
// Calls the function which combines the two functions above.
cipher(result);

// This function calls..
// the function to take the first and last characters,
// then the function to switch their order.
function cipher(string) {
  // From the sentence, grabs the first and last characters.
  const firstLast = getFirstLast(string);
  alert("Combined first and last characters: " + firstLast);
  // Switches the order of the two characters.
  const swapped = reverse(firstLast);
  alert("Swapped two letters: " + swapped);
  // Concatenates the two-letter string with the original phrase.
  const contatenated = result + swapped;
  alert("Contatenated result: " + contatenated);
}
