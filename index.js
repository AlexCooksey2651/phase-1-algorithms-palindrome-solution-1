function isPalindrome(word) {
  if (word === reverseWord(word)) {
    return true;
  } else {
    return false;
  }
  // Write your algorithm here
  
}

function reverseWord(word) {
  const letters = word.split('')
  const reverseLetters = letters.reverse()
  const reverseWord = reverseLetters.join('')
  return reverseWord
}
/* 
  Add your pseudocode here
*/
// declare isPalindrome function with one argument, a word/string
//  compare the word passed in to a reversed version (created by external function)
//  if they're the same, return true; if not, return false
// declare reverseWord function with word/string as argument
//  turn word into array using split() and declare as variable
//  reverse the array of individual letters using .reverse()
//  create & return a new variable -> rejoin the letters of the reversed array to form reverse of word that was passed through

/*
  Add written explanation of your solution here
*/
// In Own Words
  // Didn't know arrays could be reversed in Javascript! 
  // My first solution in last lab was to iterate over word with for loop.
  // Still turned the word into an array of letters, but easy now to just reverse the array.
  // This version reverses the array, then turns it back into a new word. 
  // Another option would be to create the array, split it, and then create a new variable with the array reversed.
  // I think you could then just compare the two arrays. Not certain though.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  // ALEX TEXT CASE1
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"))
  console.log("Expecting: kayak")
  console.log("=>", reverseWord("kayak"))

  // ALEX TEST CASE 2
  console.log("Expecting: rohpatem")
  console.log("=>", reverseWord("metaphor"))
  console.log("Expecting: false")
  console.log("=>", isPalindrome("metaphor"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
