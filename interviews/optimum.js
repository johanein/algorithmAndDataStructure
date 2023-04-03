function person() {
  this.name = "hello";
}

function obj() {
  obj.call(this);
}

obj.prototype = Object.create(person.prototype);
const app = new obj();
console.log(app.name);

// Where are memory leaks found?
