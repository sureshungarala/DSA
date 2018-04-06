console.clear();
function Node(data, nextRef, prevRef) {
	this.data = data;
	this.nextRef = nextRef;
	this.prevRef = prevRef;
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
Node.prototype.getPrevNode = function () {
	return this.prevRef;
}
Node.prototype.setPrevNode = function (node) {
	this.prevRef = node;
	return this;
}
function LinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}
LinkedList.prototype.getHead = function () {
	return this.head;
}
LinkedList.prototype.getTail = function () {
	return this.tail;
}
LinkedList.prototype.insertAtHead = function (data) {
	var node = new Node(data);
	if (this.length == 0) {
		this.head = node;
		this.tail = node;
	} else {
		node.setNextNode(this.head);
		this.head.setPrevNode(node);
		this.head = node;
	}
	this.length++;
}
LinkedList.prototype.insertAtTail = function (data) {
	var node = new Node(data);
	if (this.length == 0) {
		this.head = node;
		this.tail = node;
	} else {
		this.tail.setNextNode(node);
		node.setPrevNode(this.tail);
		this.tail = node;
	}
	this.length++;
}
LinkedList.prototype.deleteHead = function () {
	if (this.length != 0) {
		this.head = this.head.getNextNode();
		this.head.setPrevNode();
		this.length--;
	}
}
LinkedList.prototype.deleteTail = function () {
	if (this.length != 0) {
		this.tail = this.tail.getPrevNode();
		this.tail.setNextNode();
		this.length--;
	}
}
LinkedList.prototype.shiftLeft = function () {
	if (this.length != 0) {
		this.insertAtTail(this.head.getData());
		this.deleteHead();
	}
}
var toString = function () {
	var temp = "{ ";
	var current = this.getHead();
	while (current != null) {
		temp += current.getData() + ' ';
		current = current.getNextNode();
	}
	temp += "}";
	console.log(temp);
}
var linkedList = new LinkedList();
linkedList.insertAtTail(8);
linkedList.insertAtHead(3);
linkedList.insertAtHead(5);
linkedList.insertAtHead(1);
linkedList.insertAtHead(7);
linkedList.insertAtHead(4);
linkedList.insertAtHead(0);
linkedList.insertAtTail(6);
linkedList.insertAtTail(9);
linkedList.shiftLeft();

console.log(linkedList.getHead());
toString.call(linkedList);
console.log(linkedList.length);
linkedList.deleteHead();
console.log(linkedList.getHead());
toString.call(linkedList);
console.log(linkedList.length);
console.log(linkedList.getTail());
linkedList.deleteTail();
toString.call(linkedList);
console.log(linkedList.length);
console.log(linkedList.getTail());