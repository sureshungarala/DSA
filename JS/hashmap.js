// var rl = require('readline');
// var intrf = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

function Node(key, value, nextRef, prevRef) {
	this.key = key;
	this.value = value;
	this.nextRef = nextRef;
	this.prevRef = prevRef;
}
Node.prototype.getKey = function () {
	return this.key;
};
Node.prototype.getValue = function () {
	return this.value;
};
Node.prototype.setNextNode = function (node) {
	this.nextRef = node;
	return this;
};
Node.prototype.getNextNode = function () {
	return this.nextRef;
};
Node.prototype.getPrevNode = function () {
	return this.prevRef;
};
Node.prototype.setPrevNode = function (node) {
	this.prevRef = node;
	return this;
};
function LinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}
LinkedList.prototype.getHead = function () {
	return this.head;
};
LinkedList.prototype.getTail = function () {
	return this.tail;
};
LinkedList.prototype.insertAtHead = function (key, value) {
	var node = new Node(key, value);
	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	} else {
		node.setNextNode(this.head);
		this.head.setPrevNode(node);
		this.head = node;
	}
	this.length++;
};
LinkedList.prototype.insertAtTail = function (key, value) {
	var node = new Node(key, value);
	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	} else {
		this.tail.setNextNode(node);
		node.setPrevNode(this.tail);
		this.tail = node;
	}
	this.length++;
};
function HashMap(map) {
	this.data = map || [];
}
HashMap.prototype.hash = function (number) {
	return Math.round(Math.sqrt(number));
};
HashMap.prototype.push = function (key, value) {
	var index = this.hash(key);
	var dlList = this.data[index];
	if (!dlList) {
		dlList = new LinkedList();
	}
	dlList.insertAtHead(key, value);
	this.data[index] = dlList;
};
HashMap.prototype.search = function (key) {
	var index = this.hash(key);
	var dlList = this.data[index];
	var h = dlList.getHead(), t = dlList.getTail();
	while (null !== h || null !== t) {
		if ((h === t) && h.getKey() !== key) {
			break;
		} else if (h.getKey() === key) {
			return h.getValue();
		} else if (t.getKey() === key) {
			return t.getValue();
		}
		h = h.getNextNode(), t = t.getPrevNode();
	}
	return;
};
// var rl=require('readline');
// var intrf=rl.createInterface({input:process.stdin,output:process.stdout,terminal:false});
// var hashmap=new HashMap();
// var stucount=0,isStucount=false,stuvar=0,qcount=0,isQ=false,qvar=0,stuArr=[],searchArr=[];
// function pushStu(){
//     for(var i in stuArr){
//         var temp=stuArr[i].split(' ');
//         hashmap.push(parseInt(temp[0],10),temp[1].toString());
//     }
// }
// function printresult(){
//     for(var i in searchArr){
//         console.log(hashmap.search(searchArr[i]));
//     }
// }
// intrf.on('line',function(data){
//     data=data.toString();
//     if(!isStucount){
//         stucount=parseInt(data,10);
//         isStucount=true;
//     }else if(stuvar<stucount){
//         stuArr.push(data);
//         stuvar++;
//     }else if(!isQ){
//         qcount=parseInt(data,10);
//         isQ=true;
//     }else if(qvar<qcount){
//         searchArr.push(parseInt(data,10));
//         qvar++;
//         if(qvar===qcount){
//             intrf.close();
//             pushStu();
//             printresult();
//         }
//     }
// });
