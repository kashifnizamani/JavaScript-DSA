import { node } from "./node.js";

export class LinkedList {
  _head;

  constructor() {
    this._head = null;
  }

  isEmpty() {
    return this._head == null;
  }
  addFirst(value) {
    this._head = new node(value);
  }
  append(value) {
    if (this._head == null) {
      this.addFirst(value);
    } else {
      let temp = this._head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new node(value);
    }
  }

  prepend(value) {
    if (this._head == null) {
      this.addFirst(value);
    } else {
      let temp = this._head;
      this.addFirst(value);
      this._head.next = temp;
    }
  }

  size() {
    let temp = this._head;
    let size = 0;
    while (temp != null) {
      temp = temp.next;
      size++;
    }
    return size;
  }

  head() {
    return this._head.value;
  }

  tail() {
    let temp = this._head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp.value;
  }

  atIndex(index) {
    let temp = this._head;
    let i = 0;
    while (temp.next != null) {
      if (i === index) {
        return temp.value;
      }
      temp = temp.next;
      i++;
    }
    return "index out of bounds";
  }

  pop() {
    let temp = this._head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  contains(value) {
    let temp = this._head;

    while (temp != null) {
      if (temp.value == value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    let temp = this._head;
    let index = 0;
    while (temp != null) {
      if (value === temp.value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (this._head == null) {
      return "list is empty";
    } else if (index < 0) {
      return "provide an appropriate index";
    } else if (index == 0) {
      this.addFirst(value);
    } else {
      let temp = this._head;
      let i = 0;

      while (temp != null) {
        if (index - 1 == i) {
          let newNode = new node(value, temp.next);
          temp.next = newNode;
          return;
        }
        temp = temp.next;
        i++;
      }
    }
  }

  removeAt(index) {

       if (index === 0) {
        this._head = this._head.next;
        return;
    }
    let temp = this._head;
    let i = 0;
    while (temp != null && temp.next != null) {
      if (index - 1 === i) {
        let next = temp.next.next;
        temp.next = next;
        return;
      }
      temp = temp.next;
      i++;
    }
  }

  toString() {
    let temp = this._head;
    let string = "";
    while (temp != null) {
      string += "( " + temp.value + " )" + " -> ";
      temp = temp.next;
    }
    string += "null";
    return string;
  }
}
