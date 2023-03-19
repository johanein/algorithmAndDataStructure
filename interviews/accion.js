function getName(...args) {
  console.log({ args });
  return this.name;
}

const object = {
  name: "Albert",
};

console.log(getName.call(object, "123"));
console.log(getName.apply(object, ["1", "2"]));

const bindedFunc = getName.bind(object);
console.log(bindedFunc());

const arr = [1, 2, 3, 3, 2, 1]; // n number of values
arr.splice(3, 0, 4, 5, 6);
console.log(arr);
