import { Tree } from "./Tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
tree.prettyPrint(tree._root)
tree.deleteNode(tree._root, 8);
tree.insert(tree._root, 13);
tree.prettyPrint(tree._root)
console.log(tree.find(tree._root, 22));

console.log("Level-order:");
  tree.levelOrderForEach((n) => console.log(n.data));

  console.log("Pre-order:");
  tree.preOrderForEach((n) => console.log(n.data));

  console.log("Post-order:");
  tree.postOrderForEach((n) => console.log(n.data));

  console.log("In-order:");
  tree.inOrderForEach((n) => console.log(n.data));