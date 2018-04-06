console.clear();
function Node(data, nextRef) {
  this.data = data;
  this.nextRef = nextRef;
}
Node.prototype.getData = function () {
  return this.data;
}
Node.prototype.setData = function (data) {
  this.data = data;
  return this;
}
Node.prototype.setNextNode = function (node) {
  this.nextRef = node;
  return this;
}
Node.prototype.getNextNode = function () {
  return this.nextRef;
}

function LinkedList() {
  this.head = this.head || new Node();
}
LinkedList.prototype.getHead = function () {
  return this.head;
}
LinkedList.prototype.insertAtHead = function (data) {
  var node = new Node(data);
  node.setNextNode(this.head);
  this.head = node;
}
LinkedList.prototype.deleteHead = function () {
  this.head = this.getHead().getNextNode();
}
var linkedList = new LinkedList();
linkedList.insertAtHead(3);
linkedList.insertAtHead(5);
linkedList.insertAtHead(1);
linkedList.insertAtHead(7);
linkedList.insertAtHead(4);
linkedList.insertAtHead(0);

var toString = function () {
  var temp = "{ ";
  var current = this.getHead();
  while (current.getNextNode() != null) {
    temp += current.getData() + ' ';
    current = current.getNextNode();
  }
  temp += " }";
  console.log(temp);
}
var length = function () {
  var length = 0;
  var current = this.getHead();
  if (current.getNextNode() == null) {
    return length;
  }
  while (current.getNextNode() != null) {
    length++;
    current = current.getNextNode();
  }
  return length;
}
toString.call(linkedList);
console.log(length.call(linkedList));
linkedList.deleteHead();
console.log(length.call(linkedList));