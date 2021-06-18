class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.location = 0;
  }
  push(value) {
    // this.location += 1;
    this.storage[this.location] = value;
    this.location += 1;
  }
  pop() {
    this.location -= 1
    var temp = this.storage[this.location];
    delete this.storage[this.location];
    return temp;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}