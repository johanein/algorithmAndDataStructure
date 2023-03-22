function runFunc() {
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello" + "78");
}
runFunc();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

// var X = { Foo: 1 };
// var output = (function () {
//   delete X.foo;
//   return X.foo;
// })();
// console.log(output);

// difference between view state and session state in js
