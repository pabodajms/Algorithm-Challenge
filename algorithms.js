// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
  if (arr.length < 2) return null; // Edge case: Not enough elements

  let first = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second; // Handle case where all elements are equal
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(isPalindrome("racecar")); // Output: true
