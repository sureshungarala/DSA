function P_Queue(){
    this.data=[];
}
P_Queue.prototype.push = function(key){
    this.data.push(key);
}
P_Queue.prototype.poll = function(){
    var elem = this.data.splice(0,1);
    return elem[0];
}
P_Queue.prototype.peek = function(){
    var elem = this.data.slice(0,1);
    return elem[0];
}
P_Queue.prototype.getData = function(){
    return this.data;
}
queue = new P_Queue();
var sure=[3,7,1,21,45,32,43,57,98,71,88,64];
for(var i in sure){
    queue.push(sure[i]);
}
console.log(queue.getData());
console.log(queue.poll());
console.log(queue.getData());
console.log(queue.peek());
console.log(queue.getData());