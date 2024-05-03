console.clear();
// console.log(window.performance.now());
function Node(data) {
  this.data = data;
  this.parent = null;
  this.leftRef = null;
  this.rightRef = null;
}
Node.prototype.getData = function () {
  return this.data;
};
Node.prototype.setData = function (data) {
  this.data = data;
  return this;
};
Node.prototype.setParentNode = function (node) {
  this.parent = node;
};
Node.prototype.getParentNode = function () {
  return this.parent;
};
Node.prototype.setRightNode = function (node) {
  this.rightRef = node;
  return this;
};
Node.prototype.getRightNode = function () {
  return this.rightRef;
};
Node.prototype.getLeftNode = function () {
  return this.leftRef;
};
Node.prototype.setLeftNode = function (node) {
  this.leftRef = node;
  return this;
};
function Tree(data) {
  this.root = data ? new Node(data) : null;
}
Tree.prototype.getRootNode = function () {
  return this.root;
};
Tree.prototype.insertNode = function (data) {
  var node = this.root;
  if (null == node) {
    this.root = new Node(data);
    return;
  }
  while (null != node) {
    if (data > node.getData()) {
      if (null == node.getRightNode()) {
        break;
      }
      node = node.getRightNode();
    } else if (data < node.getData()) {
      if (null == node.getLeftNode()) {
        break;
      }
      node = node.getLeftNode();
    }
  }
  var newNode = new Node(data);
  newNode.setParentNode(node);
  if (data < node.getData()) {
    newNode.setLeftNode(node.getLeftNode());
    node.setLeftNode(newNode);
  } else if (data > node.getData()) {
    newNode.setRightNode(node.getRightNode());
    node.setRightNode(newNode);
  }
};
Tree.prototype.findNode = function (data) {
  var node = this.root;
  while (null != node) {
    if (data == node.getData()) {
      break;
    } else if (data > node.getData()) {
      node = node.getRightNode();
    } else if (data < node.getData()) {
      node = node.getLeftNode();
    }
  }
  return node;
};
Tree.prototype.getExtrmLeftNode = function (node) {
  while (null != node.getLeftNode()) {
    node = node.getLeftNode();
  }
  return node;
};
Tree.prototype.getExtrmRightNode = function (node) {
  while (null != node.getRightNode()) {
    node = node.getRightNode();
  }
  return node;
};
Tree.prototype.deleteNode = function (data) {
  var node = this.findNode(data);
  if (null != node) {
    var parent = node.getParentNode();
    if (null == node.getLeftNode() && null == node.getRightNode()) {
      if (null != parent) {
        if (node.getData() > parent.getData()) {
          parent.setRightNode(null);
        } else {
          parent.setLeftNode(null);
        }
      } else {
        node = null;
        this.root = node;
      }
    } else if (null == node.getLeftNode() || null == node.getRightNode()) {
      if (null != parent) {
        if (null == node.getLeftNode()) {
          if (node.getData() > parent.getData()) {
            node.getRightNode().setParentNode(parent);
            parent.setRightNode(node.getRightNode());
          } else {
            var extrmLeftNode = this.getExtrmLeftNode(node.getRightNode());
            if (null != extrmLeftNode.getRightNode()) {
              extrmLeftNode
                .getParentNode()
                .setLeftNode(extrmLeftNode.getRightNode());
              extrmLeftNode
                .getRightNode()
                .setParentNode(extrmLeftNode.getParentNode());
            }
            extrmLeftNode.setParentNode(parent);
            extrmLeftNode.setLeftNode(node.getLeftNode());
            extrmLeftNode.setRightNode(node.getRightNode());
            node.getRightNode().setParentNode(extrmLeftNode);
          }
        } else {
          if (node.getData() < parent.getData()) {
            node.getLeftNode().setParentNode(parent);
            parent.setLeftNode(node.getLeftNode());
          } else {
            var extrmRightNode = this.getExtrmRightNode(node.getLeftNode());
            if (null != extrmRightNode.getLeftNode()) {
              extrmRightNode
                .getParentNode()
                .setRightNode(extrmRightNode.getLeftNode());
              extrmRightNode
                .getLeftNode()
                .setParentNode(extrmRightNode.getParentNode());
            }
            extrmRightNode.setParentNode(parent);
            extrmRightNode.setLeftNode(node.getLeftNode());
            node.getLeftNode().setParentNode(extrmRightNode);
            extrmRightNode.setRightNode(node.getRightNode());
          }
        }
      } else {
        if (null == node.getLeftNode()) {
          node = node.getRightNode();
        } else {
          node = node.getLeftNode();
        }
        this.root = node;
      }
    } else {
      var extrLeftNode = this.getExtrmLeftNode(node.getRightNode());
      if (extrLeftNode != node.getRightNode()) {
        extrLeftNode.setRightNode(node.getRightNode());
        node.getRightNode().setParentNode(extrLeftNode);
        if (null != extrLeftNode.getRightNode()) {
          extrLeftNode.getParentNode().setLeftNode(extrLeftNode.getRightNode());
          extrLeftNode
            .getRightNode()
            .setParentNode(extrLeftNode.getParentNode());
        }
      }
      extrLeftNode.setParentNode(parent);
      extrLeftNode.setLeftNode(node.getLeftNode());
      node.getLeftNode().setParentNode(extrLeftNode);
      if (null != parent) {
        if (node.getData() > parent.getData()) {
          node.getParentNode().setRightNode(extrLeftNode);
        } else {
          node.getParentNode().setLeftNode(extrLeftNode);
        }
      } else {
        this.root = extrLeftNode;
      }
    }
  }
};
Tree.prototype.inorder = function (node, arr) {
  if (null != node) {
    this.inorder(node.getLeftNode(), arr);
    arr.push(node.getData());
    this.inorder(node.getRightNode(), arr);
  }
};
Tree.prototype.printSorted = function () {
  var root = this.root,
    arr = [],
    extrmLeftNode = this.getExtrmLeftNode(root);
  this.inorder(root, arr);
  return arr;
};

//console.log('node b1');
//console.log(node);
// console.log(window.performance.now());
// var tree = new Tree(25);
// tree.insertNode(30);
// tree.insertNode(20);
// tree.insertNode(22);
// tree.insertNode(19);
// tree.insertNode(-10);
// tree.insertNode(35);
// tree.insertNode(42);
// tree.insertNode(12);
// tree.insertNode(7);
// tree.insertNode(34);
// tree.insertNode(33);
// tree.insertNode(45);
// console.log(window.performance.now());
// console.log(tree);
// console.log(window.performance.now());
// console.log(tree.findNode(35));
// console.log(window.performance.now());
// tree.deleteNode(35);
// console.log(window.performance.now());
// console.log(tree);
// console.log(window.performance.now());
// console.log(tree.printSorted());
// console.log(tree.findNode(123));

module.exports = Tree;
