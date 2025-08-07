import { LinkedList } from "./LinkedList.js";


let head = new LinkedList();
head.append("kashif");
head.append("22sw052");
head.prepend("hello");
head.append("goodbye")
head.prepend("hi");

console.log(head.toString());
console.log(head.size());
console.log(head.head());
console.log(head.tail());