// let arr = [1, 2, 3, 2, 5, 4, 6, 4, 5, 2, 7, 4, 5, 2, 4];
// let output = [2, 4, 5];

// const getDuplicateItems = (paramArray) => {
//   const dictArray = paramArray.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});

//   return Object.entries(dictArray).reduce((acc, [key, value]) => {
//     if (value > 1) {
//       return [...acc, key];
//     }
//     return acc;
//   }, []);
// };
// console.log(getDuplicateItems(arr));

// let str = "Find number of vowels in this string";
// const vowels = ["a", "e", "i", "o", "u"];

// const findVowelsCount = (paramString) => {
//   const splittedStringArray = paramString.split("");

//   return splittedStringArray.reduce((acc, each) => {
//     const lowerCaseEach = each.toLowerCase();
//     const isVowel = vowels.includes(lowerCaseEach);

//     if (isVowel) {
//       if (acc[lowerCaseEach]) {
//         acc[lowerCaseEach] += 1;
//       } else {
//         acc[lowerCaseEach] = 1;
//       }
//     }
//     return acc;
//   }, {});
// };

// console.log(findVowelsCount(str));

let obj1 = {
  age: 25,
  showAge: function () {
    console.log(this.age);
  },
};
let obj2 = {
  age: 20,
};

obj2.__proto__ = Object.create(obj1);
// obj2 = { ...obj1, ...obj2 };
// obj2.showAge = obj1.showAge;
// obj2.__proto__ = obj1;
obj2.showAge();
