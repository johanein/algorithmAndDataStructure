// // // [1, [2, [[[3, 4], [5]], 6]], [7], [8, [9]], 10]

// // function flattenArray(array1) {
// //   return array1.reduce((acc, item) => {
// //     const isItemAnArray = Array.isArray(item);
// //     if (isItemAnArray) {
// //       return [...acc, ...flattenArray(item)]; // recursive
// //     } else {
// //       return [...acc, item];
// //     }
// //   }, []);
// // }

// // console.log(flattenArray([1, [2, [[[3, 4], [5]], 6]], [7], [8, [9]], 10]));

let promise = new Promise((res, rej) => {
  console.log(1);
  res(2);
});
promise.then(call);
function call(val) {
  console.log(val);
}
console.log(3);

// const multiply = (var1) => {
//   return (var2) => {
//     return var1 * var2;
//   };
// };

// console.log(multiply(5)(6));
