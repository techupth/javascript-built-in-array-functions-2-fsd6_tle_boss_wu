function isPalindrome(string) {
  let result;
  console.log("reversed string:", string.trim("").split("").reverse().join(""));
  console.log("original string:", string);
  result = `Palindrome: ${string.trim("").split("").reverse().join("") == string}`
  return result
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome(" บวบ"));// true
console.log(isPalindrome("deliver"));// false