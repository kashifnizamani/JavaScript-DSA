import { LinkedList } from "./LinkedList.js";

let head = new LinkedList();
head.append("kashif");
head.append("22sw052");
head.prepend("hello");
head.append("goodbye");
head.prepend("hi");

let list = new LinkedList();
list.append("kashif");
list.append("22sw052");

console.log(head.toString());
console.log(list.toString());
// console.log(head.size());
// console.log(head.head());
// console.log(head.tail());
// console.log(head.atIndex(1));
// head.pop();
// console.log("after pop");
// console.log(head.toString());
// console.log(head.contains("kashif"));
// console.log(head.contains("howdy"));
// console.log(head.find("22sw052"));
// console.log(head.find("hello"));
// head.insertAt("nizamani", 3);
// console.log("after insertion");
// console.log(head.toString());
// head.removeAt(3);
// console.log("after deletion");
// console.log(head.toString());
