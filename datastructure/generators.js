function* gen() {
  // console.log('first')
  //   yield 1;
  console.log(yield 1);

  console.log(yield 2);
  yield 3;

  yield 4;
}

// console.log([...gen()]);

// const generator = gen();
// console.log(generator.next());
// console.log(generator.next("Tada"));
// console.log(generator.next("Trust"));

function* gen2() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id += 1;
    }
  }
}

const generator2 = gen2();
console.log(generator2.next().value);
console.log(generator2.next(4).value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);

//  below code iterates forever in javascript
// while (generator2.next().value !== false) {
//     console.log(generator2.next().value);
// }
