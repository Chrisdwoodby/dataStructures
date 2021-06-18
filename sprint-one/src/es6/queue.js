class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.startIndex = 0;
    this.endIndex = 0;
    this.storage = {}
  }
  enqueue(value) {
    this.endIndex += 1;
    this.storage[this.endIndex] = value;
  }
  dequeue() {
    this.startIndex += 1;
    var temp = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    return temp;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
