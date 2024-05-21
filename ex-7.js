function isPalindrome(string) {
  let result;
  console.log("reversed string:", string.split("").reverse().join(""));
  console.log("original string:", string);
  result = `Palindrome: ${string.split("").reverse().join("") == string}`
  return result
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false