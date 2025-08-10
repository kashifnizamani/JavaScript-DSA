import { Node } from "./Node.js";

export class Tree {
  _root;

  constructor(array) {
    this._root = this.callBuildTree(this.sortArray(array));
  }

  buildTree(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = this.buildTree(arr, start, mid - 1);

    // Create right subtree
    root.right = this.buildTree(arr, mid + 1, end);

    return root;
  }

  sortArray(array) {
    let filteredArray = [...new Set(array)];
    filteredArray.sort((a, b) => a - b);
    return filteredArray;
  }

  callBuildTree(arr) {
    return this.buildTree(arr, 0, arr.length - 1);
  }


  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
     this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
