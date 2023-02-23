var isPalindrome = function (input) {
  // Get the length of the input
  let inputLen = input.length;

  // Convert the input to lower case and remove any characters that are not alphabet
  input = input.toLowerCase().replace(/[^a-z]/g, "");

  // Check if the input is a palindrome by iterating through the first half of the string
  for (let i = 0; i < inputLen / 2; i++) {
    // If the current character and its corresponding character from the end don't match
    if (input[i] != input[inputLen - i - 1]) {
      // Log that input is not a palindrome
      console.log(input + " is not a plaindrome");
      // Return to the exit function
      return;
    }
  }
  // Log that input is not a palindrome
  console.log(input + " is a plaindrome");
  return;
};

isPalindrome("racecar");
