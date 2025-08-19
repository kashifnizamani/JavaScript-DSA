import { Tree } from "./Tree.js";

const root = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
root.prettyPrint(root._root)
root.deleteNode(root._root, 8);
root.insert(root._root, 13);
root.prettyPrint(root._root)
console.log(root.find(root._root, 22));