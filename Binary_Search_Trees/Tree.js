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
