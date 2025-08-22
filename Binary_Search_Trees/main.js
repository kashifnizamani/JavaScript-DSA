import { Tree } from "./Tree.js";

// Build initial tree
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log("Initial tree:");
tree.prettyPrint(tree._root);

// Delete a node
console.log("\nDeleting 8...");
tree.deleteNode(tree._root, 8);

// Insert a node
console.log("\nInserting 13...");
tree.insert(tree._root, 13);

console.log("\nTree after insert/delete:");
tree.prettyPrint(tree._root);

// Find a value
console.log("\nFinding 22:");
console.log(tree.find(tree._root, 22)); // null if not found

// Traversals
console.log("\nLevel-order:");
tree.levelOrderForEach((n) => console.log(n.data));

console.log("\nPre-order:");
tree.preOrderForEach((n) => console.log(n.data));

console.log("\nPost-order:");
tree.postOrderForEach((n) => console.log(n.data));

console.log("\nIn-order:");
tree.inOrderForEach((n) => console.log(n.data));

// Height and depth checks
console.log("\nHeight of 23:", tree.height(23));
console.log("Depth of 67:", tree.depth(67));

// Balance check
console.log("\nIs tree balanced?", tree.isBalanced());

// Unbalance the tree
console.log("\nUnbalancing tree by inserting large values...");
[150, 200, 250, 300, 400].forEach((v) => tree.insert(tree._root, v));
tree.prettyPrint(tree._root);
console.log("Is tree balanced?", tree.isBalanced());

// Rebalance the tree
console.log("\nRebalancing tree...");
tree.rebalance();
tree.prettyPrint(tree._root);
console.log("Is tree balanced?", tree.isBalanced());

// Traversals after rebalance
console.log("\nLevel-order after rebalance:");
tree.levelOrderForEach((n) => console.log(n.data));

console.log("\nPre-order after rebalance:");
tree.preOrderForEach((n) => console.log(n.data));

console.log("\nPost-order after rebalance:");
tree.postOrderForEach((n) => console.log(n.data));

console.log("\nIn-order after rebalance:");
tree.inOrderForEach((n) => console.log(n.data));
