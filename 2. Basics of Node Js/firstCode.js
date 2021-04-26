// we can save node just similar as JS
// but to run it in we have to run it in terminal

console.log('run node.js in terminal');
console.log('hello world');

// creating linked list

class node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new node(value);
        this.tail = new node(value);
        this.length = 1;
    }

    next(value) {
        this.tail.next = new node(value);
        this.tail = this.tail.next;
        this.length++;
    }

    prev(value) {
        this.head.prev = new node(value);
        this.head = this.head.prev;
        this.length++;
    }

    last(){
        return this.tail.value;
    }
    front() {
      return this.head.value;
    }

    length() {
       return this.length;
    }

    removeLast() {
        const data = this.tail.value;
        this.tail = this.tail.prev;
        return data;
    }

    removeFront() {
      const data = this.head.value;
      this.head = this.head.next;
      return data;
  }
}

let list = new LinkedList(5);
list.prev(6);
list.next(8);
console.log(list.last());
console.log(list.front());
console.log(list.removeFront());
console.log(list.removeLast());
