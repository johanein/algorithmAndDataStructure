// console.log("Hello");
// const set = new Set();
// set.add(1);
// set.add(1);
// set.add("a");
// set.add("a");
// set.add(undefined);
// set.add(undefined);
// set.add({ prop: true });
// set.add({ prop: true });
// console.log(set.size);

function* gen1() {
  console.log(yield 1);
  console.log(yield 2);
  console.log(yield 3);
}
const ite = gen1();
console.log(ite.next("a").value);
console.log(ite.next("b").value);
console.log(ite.next("c").value);

const arr = [
  { id: 1, name: "A" },
  { id: 1, name: "B" },
  { id: 1, name: "C" },
  { id: 1, name: "D" },
  { id: 1, name: "A" },
  { id: 1, name: "G" },
  { id: 1, name: "B" },
  { id: 1, name: "A" },
  { id: 1, name: "F" },
];

const removeDuplicates = (arr) => {
  const nameObject = {};
  let returnArray = [];
  arr.forEach((each) => {
    const { name } = each || {};
    if (!nameObject[name]) {
      returnArray.push(each);
      nameObject[name] = name;
    } else {
      nameObject[name] = name;
    }
  });
  return returnArray;
};
console.log(removeDuplicates(arr));

// https://stackblitz.com/edit/react-ts-yju2a1?file=App.tsx
