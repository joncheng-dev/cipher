$(document).ready(function () {
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

  // This function calls..
  // the function to take the first and last characters,
  // then the function to switch their order.
  // THEN concatenates the original string with the two letters.
  function cipher(string) {
    // From the sentence, grabs the first and last characters.
    const firstLast = getFirstLast(string);
    alert("Combined first and last characters: " + firstLast);
    // Switches the order of the two characters.
    const swapped = reverse(firstLast);
    alert("Swapped two letters: " + swapped);
    // Concatenates the two-letter string with the original phrase.
    return result + swapped;
  }

  // This function counts the number of letters in the original sentence,
  // divides it by 2 (rounding down if needed),
  // and outputs the letter at this spot.
  function fourth(userEntered) {
    // Counts the number of letters in original sentence.
    const count = userEntered.length;
    // Divides it by two.
    const quotient = Math.floor(count / 2);
    return userEntered.charAt(quotient);
  }

  // Prompts user to enter a sentence, then prints to screen.
  const result = prompt("Enter a sentence");
  alert("Sentence entered was: " + result);
  // Calls the function which does all the things.
  const concatenated = cipher(result);
  alert("Concatenated result: " + concatenated);
  alert(fourth(result));

  $(".col-md-5").click(function () {
    alert("Original sentence: " + result);
  });

  $(".col-md-7").click(function () {
    alert("Encoded sentence: " + concatenated);
  });
});
