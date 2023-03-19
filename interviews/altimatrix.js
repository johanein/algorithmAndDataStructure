// var name = "Baggins";
// (function () {
// console.log("Original name was " + name);
// var name = "Underhill";
// console.log("New name is " + name);
// })();
// console.log("Final name is " + name);

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// clothes[0];

// frequency of the elem
// remove the duplicates

function getFrequency(paramArr) {
  const frequencyObj = {};
  for (let i = 0; i < paramArr.length; i++) {
    const element = paramArr[i];
    if (frequencyObj[element]) {
      frequencyObj[element] += 1;
    } else {
      frequencyObj[element] = 1;
    }
  }
  return frequencyObj;
}
const arr = [1, 2, 3, 4, 1, 2, 4, 5, 6, 4];
console.log(getFrequency(arr));

function removeDuplicates(paramArr) {
  const frequencyObj = {};
  for (let i = 0; i < paramArr.length; i++) {
    const element = paramArr[i];
    frequencyObj[element] = 1;
  }
  return Object.keys(frequencyObj);
}

console.log(removeDuplicates(arr));
