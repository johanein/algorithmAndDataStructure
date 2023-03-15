const isPalindrome = (str) => str.split("").reverse().join("") === str;

// a -> true
// ab -> false
// abba ->true
// zzxzz - true

console.log(isPalindrome("a"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("zzxzz"));
