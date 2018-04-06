console.clear();
console.log(window.performance.now());
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
  this.head.setPrevNode(this.tail);
  this.tail.setNextNode(this.head);
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
  this.head.setPrevNode(this.tail);
  this.tail.setNextNode(this.head);
  this.length++;
}
LinkedList.prototype.deleteHead = function () {
  if (this.length != 0) {
    this.head = this.head.getNextNode();
    this.head.setPrevNode(this.tail);
    this.tail.setNextNode(this.head);
    this.length--;
  }
}
LinkedList.prototype.deleteTail = function () {
  if (this.length != 0) {
    this.tail = this.tail.getPrevNode();
    this.tail.setNextNode(this.head);
    this.head.setPrevNode(this.tail);
    this.length--;
  }
}
var toString = function () {
  var temp = "{ ";
  var current = this.getHead();
  while (current != null) {
    temp += current.getData() + ' ';
    current = current.getNextNode();
    if (current == this.head) {
      break;
    }
  }
  temp += "}";
  console.log(temp);
}
var sort = function (list) {
  var sortedList = new LinkedList();
  var current = list.getHead();
  while (current != null) {
    var node = new Node(current.getData());
    var sortedHead = sortedList.getHead();
    var sortedTail = sortedList.getTail();
    if (0 == sortedList.length) {
      sortedList.head = node;
      sortedList.tail = node;
      sortedList.getHead().setPrevNode(sortedList.tail);
      sortedList.getTail().setNextNode(sortedList.head);
    } else if (node.getData() < sortedHead.getData()) {
      node.setNextNode(sortedHead);
      node.setPrevNode(sortedTail);
      sortedHead.setPrevNode(node);
      sortedTail.setNextNode(node);
      sortedList.head = node;
    } else {
      var temp = sortedHead;
      while (temp.getData() < node.getData()) {
        temp = temp.getNextNode();
        if (temp == sortedHead) {
          break;
        }
      }
      node.setPrevNode(temp.getPrevNode());
      node.setNextNode(temp);
      temp.getPrevNode().setNextNode(node);
      temp.setPrevNode(node);
      if (temp == sortedHead) {
        sortedList.tail = node;
      }
    }
    sortedList.length++;
    current = current.getNextNode();
    if (current == list.head) {
      break;
    }
  }

  return sortedList;
}

/*console.log('started pusing in array '+window.performance.now());
var arr=[];
for(var i=-500000;i<500001;i++){
arr.push(i);
console.log('finished pusing in array '+window.performance.now());
}*/

var linkedList = new LinkedList();

linkedList.insertAtTail(8);
linkedList.insertAtHead(3);
linkedList.insertAtHead(5);
linkedList.insertAtHead(1);
linkedList.insertAtHead(7);
linkedList.insertAtHead(4);
linkedList.insertAtHead(-1);
linkedList.insertAtHead(0);
linkedList.insertAtTail(6);
linkedList.insertAtTail(9);
/*console.log(window.performance.now());
 for(var i=0;i<1000000;i++){
   var temp=arr[Math.floor(Math.random()*arr.length)];
   if(temp>=0){
     linkedList.insertAtTail(temp);
   }else{
     linkedList.insertAtHead(temp);
   }
 } took 5.56 hrs to sort 1 million nodes
 */
console.log(window.performance.now());
//toString.call(linkedList);
console.log(window.performance.now());
console.log(linkedList);
console.log('before sort ' + window.performance.now());
var sortedList = sort(linkedList);
console.log('after sort ' + window.performance.now());
//toString.call(sortedList);
console.log(window.performance.now());
console.log(sortedList);
console.log(window.performance.now());

