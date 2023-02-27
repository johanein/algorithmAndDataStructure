class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key[i].charCodeAt();
    }
    return total % this.size;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashtable = new Hashtable(50);
hashtable.set("a", "Albert");
hashtable.set("b", "Lify");
hashtable.set("c", "Arun");
hashtable.set("f", "Alan");
hashtable.set("d", "Angel");
hashtable.set("e", "Alfred");
hashtable.display();
console.log(hashtable.get("a"));
hashtable.remove("f");
hashtable.display();
