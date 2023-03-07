class HashedTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key[i].charCodeAt();
    }
    return total % this.size;
  };
  set = (key, value) => {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const keyValueExist = bucket.find((item) => item[0] === key);
      if (keyValueExist) {
        // this.table[index][bucket.indexOf(keyValueExist)][1] = value;
        keyValueExist[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  };
  get = (key) => {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const findFromBucket = this.table[index].find((item) => item[0] === key);
      return findFromBucket[1];
    }
    return undefined;
  };
  remove = (key) => {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const findSet = bucket.find((item) => item[0] === key);
      this.table[index].splice(bucket.indexOf(findSet), 1);
    }
  };
  display = () => {
    for (let i = 0; i < this.size; i++) {
      const element = this.table[i];
      if (element) {
        console.log(i, element);
      }
    }
  };
}

const hashtable = new HashedTable(50);
hashtable.set("name", "Albert");
hashtable.set("name", "johanein");
hashtable.set("mane", "Bruce");
hashtable.set("a", "Wayne");
hashtable.display();
hashtable.remove("mane");
console.log(hashtable.get("a"));
hashtable.display();
