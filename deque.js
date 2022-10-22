class DoubleNode {
    constructor(val) {
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {   //vals = []
        this.head = null;
        this.tail = null;
        this.length = 0;

        //for (let val of vals) this.push(val);
    }

    /** _get(idx): retrieve node at idx. */
    _get(idx) {
        let cur = this.head;
        let count = 0;

        while (cur !== null && count != idx) {
            count += 1;
            cur = cur.next;
        }

        return cur;
    }

    /** push(val): add new value to end of list. */
    push(val) {
        let newNode = new DoubleNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        let newNode = new DoubleNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }

        if (this.length === 0) this.tail = this.head;

        this.length += 1;
    }

    /** pop(): return & remove last item. */
    pop() {
        return this.removeAt(this.length - 1);
    }

    /** shift(): return & remove first item. */
    shift() {
        return this.removeAt(0);
    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        return this._get(idx).val;
    }

    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        let cur = this._get(idx);
        cur.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx > this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        // get the one before it
        let prev = this._get(idx - 1);

        let newNode = new DoubleNode(val);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length += 1;
    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        // special case: remove first item

        if (idx === 0) {

            let val = this.head.val;
            this.head = this.head.next;
            this.length -= 1;
            if (this.length < 2) this.tail = this.head;
            return val;

        }

    //    let prev = this._get(idx - 1);

        // special case: remove tail

        if (idx === this.length - 1) {
            let val = this.tail.val;
            
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            return val;
        }

        // normal case: remove in middle
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        return this;

    }

}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this._list = new DoublyLinkedList();
    }
    //Add to beginning
    appendleft(val) {
        return this._list.unshift(val);
    }

    appendright(val) {
        return this._list.push(val);
    }

    //Remove from beginning
    popleft() {
        return this._list.removeAt(0);
    }

    popright() {
        return this._list.pop();
    }

}