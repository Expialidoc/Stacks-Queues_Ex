/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size += 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const temp = this.first;

    if (!this.first) {
      throw new Error("An empty queue!");
    } else if (this.first === this.last) {
      this.first = null; 
      this.last = null;
      this.size -= 1;
    } else {
      this.first = this.first.next;
      this.size -= 1;
    }
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    const temp = this.first;

    if (!this.first) {
      return null;
    } else {
      return temp.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
