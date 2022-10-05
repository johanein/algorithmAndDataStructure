const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disc 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disc ${n} from ${fromRod} to ${toRod} `);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(4, "A", "C", "B"); // using master theorem O(n) = 2ˆn
