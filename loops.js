let parent = 0;
let child = 0;
const first = () => {
  for (let i = 0; i <= 10; i++) {
    parent += 1;
    for (let index = i; index <= 100; index++) {
      child += 1;
      if (index === 50) {
        break; // use continue, break and return for testing
      }
    }
  }
};
first();
console.log({ child, parent });
