// Write a function that removes all duplicated case insensitive characters from a string.

// For example: “I love Javascript” => “loejscrpt”; “hello world” => “he wrd”

const str1 = "I love Javascript";

const str2 = "hello world";

const removeDups = (str) => {
  // – add your code here
  const repeatedLetterObj = {};
  const objectWithoutDuplicates = str.split("").reduce((acc, item) => {
    const isValueEmpty = item === " ";
    const lowerCaseLetter = isValueEmpty ? item : item.toLowerCase();
    const isValueAlreadyInAcc = acc[item];

    const hasValueAlreadyOccuredBefore = repeatedLetterObj[lowerCaseLetter];

    if (
      // !isValueEmpty &&
      isValueAlreadyInAcc ||
      hasValueAlreadyOccuredBefore
    ) {
      repeatedLetterObj[lowerCaseLetter] = lowerCaseLetter;
      delete acc[lowerCaseLetter];
      return acc;
    } else {
      return {
        ...acc,
        [lowerCaseLetter]: lowerCaseLetter,
      };
    }
  }, {});
  return Object.values(objectWithoutDuplicates).join("");
};

console.log(removeDups(str1)); // output should be ‘loejscrpt’

console.log(removeDups(str2)); // output should be ‘he wrd’
console.log(removeDups("An ant")); // output should be ‘ t’
