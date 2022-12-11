const obj = {
  name: "Albert",
  age: 12,
  "key-2": "raw",
  sayMyName: function () {
    return this.name;
  },
};
delete obj.age;
console.log(obj["key-2"]);
console.log(obj.sayMyName());
console.log({ obj });

// Object.keys() .values() .entries()
