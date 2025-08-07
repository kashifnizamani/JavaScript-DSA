import { LinkedList } from "./LinkedList.js";


let head = new LinkedList();
head.append("kashif");
head.append("22sw052");
head.prepend("hello");
head.append("goodbye")
head.prepend("hi");

console.log(head.toString());
// console.log(head.size());
// console.log(head.head());
// console.log(head.tail());

// console.log(head.atIndex(1));
// head.pop();
// console.log("after pop");
// console.log(head.toString());
// console.log(head.contains("kashif"));
// console.log(head.contains("howdy"));

console.log(head.find("22sw052"));
console.log(head.find("hello"));
