const Queue = require('./Queue.js');

class BTNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
  insertLeft(data) {
    this.left =
      data instanceof BTNode
        ? data
        : data === null || data === undefined
        ? null
        : new BTNode(data);
  }
  insertRight(data) {
    this.right =
      data instanceof BTNode
        ? data
        : data === null || data === undefined
        ? null
        : new BTNode(data);
  }

  getExtremeLeft() {
    let parent = this;
    let node = this;
    while (node.left) {
      parent = node;
      node = node.left;
    }
    return [node, parent];
  }

  getExtremeRight() {
    let parent = this;
    let node = this;
    while (node.right) {
      parent = node;
      node = node.right;
    }
    return [node, parent];
  }

  count() {
    let count = 1;
    let node = this;
    // console.log('val ', node.value);
    if (node.left) {
      count += node.left.count();
    }
    if (node.right) {
      count += node.right.count();
    }
    return count;
  }

  printDFS() {
    let array = [];
    array.push(this.value);
    if (this.left) array.push(...this.left.printDFS());
    if (this.right) array.push(...this.right.printDFS());
    return array;
  }

  // should go by levels => by each depth level
  printBFS() {
    let array = [];
    let queue = new Queue();
    let node = this;
    queue.push(node);
    while (queue.length() > 0) {
      node = queue.pop();
      array.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return array;
  }

  // TODO: Graph
  print(level = 0, prefix = '', parentColor = '\x1b[37m') {
    // Default color is white
    // Define ANSI color codes
    const colors = [
      '\x1b[31m', // Red
      '\x1b[34m', // Blue
      '\x1b[32m', // Green
      '\x1b[33m', // Yellow
      '\x1b[35m', // Magenta
      '\x1b[36m', // Cyan
    ];
    const reset = '\x1b[0m'; // Reset color

    // Choose a color for this node, different from the parent if possible
    let myColor = colors[Math.floor(Math.random() * colors.length)];
    if (myColor === parentColor && colors.length > 1) {
      // Ensuring parent and current node do not share the same color
      let newColors = colors.filter((c) => c !== parentColor);
      myColor = newColors[Math.floor(Math.random() * newColors.length)];
    }

    const myPrefix = `${parentColor}----${reset}${myColor}`;

    if (this.right) {
      this.right.print(level + 1, '    ' + prefix, myColor);
    }
    console.log(`${prefix}${level > 0 ? myPrefix : ''}${this.value}${reset}`);
    if (this.left) {
      this.left.print(level + 1, '    ' + prefix, myColor);
    }
  }
}

class BTree {
  constructor(data) {
    this.root =
      data instanceof BTNode
        ? data
        : data === null || data === undefined
        ? null
        : new BTNode(data);
    this.direction = {
      LEFT: -1,
      RIGHT: 1,
    };
  }

  insert(data) {
    let node = this.root;
    if (!node) {
      this.root = new BTNode(data);
      return;
    }
    while (true) {
      if (data > node.value) {
        if (node.right) node = node.right;
        else break;
      } else if (data < node.value) {
        if (node.left) node = node.left;
        else break;
      } else {
        break;
      }
    }
    if (data >= node.value) {
      const right = node.right ?? null;
      const newRight = new BTNode(data);
      right && newRight.insertLeft(right);
      node.insertRight(newRight);
    } else {
      const left = node.left ?? null;
      const newLeft = new BTNode(data);
      left && newLeft.insertRight(left);
      node.insertLeft(newLeft);
    }
    this.balance();
  }

  balance(root = this.root, parent = null, direction = this.direction.LEFT) {
    let node = root;
    console.log('node ', node);
    while (true) {
      let leftNodeCount = node.left?.count() ?? 0;
      let rightNodeCount = node.right?.count() ?? 0;
      console.log('count ', leftNodeCount, rightNodeCount);
      if (Math.abs(leftNodeCount - rightNodeCount) > 1) {
        if (leftNodeCount > rightNodeCount) {
          const [lastRight, leafParent] = node.left.getExtremeRight();
          if (leafParent !== lastRight) {
            if (lastRight.left) {
              leafParent.insertRight(lastRight.left);
            } else {
              leafParent.insertRight(null);
            }
          }
          if (node.left !== lastRight) {
            lastRight.left = node.left;
          }
          node.insertLeft(null);
          lastRight.right = node;
          if (node === this.root) {
            this.root = lastRight;
          }
          node = lastRight;
        } else {
          const [lastLeft, leafParent] = node.right.getExtremeLeft();
          if (leafParent !== lastLeft) {
            if (lastLeft.right) {
              leafParent.insertLeft(lastLeft.right);
            } else {
              leafParent.insertLeft(null);
            }
          }
          if (node.right !== lastLeft) {
            lastLeft.right = node.right;
          }
          node.insertRight(null);
          lastLeft.left = node;
          if (node === this.root) {
            this.root = lastLeft;
          }
          node = lastLeft;
        }
        if (parent) {
          if (direction === this.direction.LEFT) {
            parent.insertLeft(node);
          } else {
            parent.insertRight(node);
          }
        }
      } else {
        if (!node.left || !node.right) break;
        if (node.left) this.balance(node.left, node, this.direction.LEFT);
        if (node.right) this.balance(node.right, node, this.direction.RIGHT);
        break;
      }
    }
  }

  printDFS() {
    return this.root.printDFS();
  }

  printBFS() {
    return this.root.printBFS();
  }

  print() {
    if (this.root) {
      this.root.print();
    } else {
      console.log('The tree is empty');
    }
  }
}

const binaryTree = new BTree();
binaryTree.insert(59);
binaryTree.insert(52);
binaryTree.insert(1);
binaryTree.insert(37);
binaryTree.insert(36);
binaryTree.insert(8);
binaryTree.insert(85);
binaryTree.insert(65);
binaryTree.insert(60);
binaryTree.insert(97);
// console.log(binaryTree);
console.log('DFS:', binaryTree.printDFS());
console.log('BFS:', binaryTree.printBFS());
binaryTree.print();
