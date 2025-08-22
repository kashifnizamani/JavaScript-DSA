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

    insert(root, data){

       if (root === null)
        return new Node(data);
        
    // Duplicates not allowed    
    if (root.data === data)
        return root;
      
      if(data < root.data){
        root.left = this.insert(root.left, data) 
      }
      else if(data > root.data){
        root.right = this.insert(root.right, data)
      }
      return root;

    }

    getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

    deleteNode(root, data){

      if(root === null){
        return root;
      }

      if(root.data > data){
        root.left = this.deleteNode(root.left, data);
      }
      else if(root.data < data){
        root.right = this.deleteNode(root.right, data);
      }
      else{

                // If root matches with the given key

        // Cases when root has 0 children or 
        // only right child
        if (root.left === null) 
            return root.right;

        // When root has only left child
        if (root.right === null) 
            return root.left;

        // When both children are present
        let succ = this.getSuccessor(root);
        root.data = succ.data;
        root.right = this.deleteNode(root.right, succ.data);
    }
    return root;
    }

    find( node = this._root, value) {
    if (node === null) return null;
    if (value === node.data) return node;

    if (value < node.data) return this.find(node.left, value);
    return this.find(node.right, value);
  }

    levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback is required");

    let queue = [];
    queue.push(this._root);

    while (queue.length > 0) {
      let node = queue.shift();
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback, node = this._root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;

    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this._root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;

    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this._root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;

    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }

    height(value) {
    let node = this.find(this._root, value);
    if (!node) return null;

    const calcHeight = (n) => {
      if (n === null) return -1;
      return 1 + Math.max(calcHeight(n.left), calcHeight(n.right));
    };

    return calcHeight(node);
  }

  depth(value, node = this._root, currentDepth = 0) {
    if (node === null) return null;
    if (node.data === value) return currentDepth;

    if (value < node.data) {
      return this.depth(value, node.left, currentDepth + 1);
    } else {
      return this.depth(value, node.right, currentDepth + 1);
    }
  }

  isBalanced(node = this._root) {
    if (node === null) return true;

    const height = (n) => {
      if (n === null) return -1;
      return 1 + Math.max(height(n.left), height(n.right));
    };

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
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
