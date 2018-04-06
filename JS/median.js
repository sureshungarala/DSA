function Node(data){
	this.data=data;
    this.leftRef=null;
    this.rightRef=null;
}
Node.prototype.getData=function(){
	return this.data;
}
Node.prototype.setRightNode=function(node){
	this.rightRef=node;
  return this;
}
Node.prototype.getRightNode=function(){
	return this.rightRef;
}
Node.prototype.getLeftNode=function(){
	return this.leftRef;
}
Node.prototype.setLeftNode=function(node){
	this.leftRef=node;
  return this;
}
function Tree(data){
	this.root=data ? new Node(data) : null;
}
Tree.prototype.insertNode=function(data){
	var node=this.root;
  if(null==node){
  	this.root=new Node(data);
    return;
  }
	while(null!=node){
  	if(data > node.getData()){
    	if(null==node.getRightNode()){
      	break;
      }
      node=node.getRightNode();
    }else if(data < node.getData()){
      if(null==node.getLeftNode()){
      	break;
      }
      node=node.getLeftNode();
    }
  }
  var newNode=new Node(data);
  if(data < node.getData()){
    newNode.setLeftNode(node.getLeftNode());
  	node.setLeftNode(newNode);
  }else if(data > node.getData()){
    newNode.setRightNode(node.getRightNode());
  	node.setRightNode(newNode);
  }
}

Tree.prototype.inorder=function(node,arr){
	if(null!=node.getLeftNode()){
		this.inorder(node.getLeftNode(),arr);
	}
		arr.push(node.getData());
	if(null!=node.getRightNode()){
		this.inorder(node.getRightNode(),arr);
	}
}
Tree.prototype.printSorted=function(){
	var arr=[];
	this.inorder(this.root,arr);
	return arr;
}
Tree.prototype.median=function(){
    var arr=this.printSorted(),len=arr.length;
    if(len%2==0){
        return ((arr[len/2]+arr[(len/2)-1])/2).toFixed(1);
    }
    return (arr[(len-1)/2]).toFixed(1);
}

var tree=new Tree(25);