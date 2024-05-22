function isPalindrome(string) {
  // Start coding here
  const reversedText = string
    .trim("")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return string.trim("").toLowerCase() === reversedText;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
