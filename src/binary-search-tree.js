const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);
    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }
      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }

  find(data) {
    return searchNode(this.rootNode, data);
    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
