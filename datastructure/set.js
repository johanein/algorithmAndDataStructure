const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
console.log(set.delete(2));
console.log(set.size);

for (let item of set) {
  console.log(item);
}
console.log([...set])  // gives an array
set.clear();
console.log([...set])


const newSet = new Set();
newSet.add('ref')
const obj = {name :'tony',test : {age : 21}};
// const newObj = {...obj}
const newObj = JSON.parse(JSON.stringify(obj));
newObj.name = 'Ben';
newObj.test.age = 54;
console.log(obj)
console.log(newObj)
// newSet.add(obj)
// newSet.add(obj)
// console.log([...newSet])
