console.clear();
function Queue() {
    this.data = [];
}
Queue.prototype.push = function (data) {
    this.data.push(data);
}
Queue.prototype.pop = function () {
    return this.data.shift();
}
Queue.prototype.peek = function () {
    return this.data[0];
}
Queue.prototype.toString = function () {
    console.log('[ ' + this.data.toString() + ' ]');
}
Queue.prototype.length = function () {
    return this.data.length;
}
var q = new Queue();
q.push(2);
q.push(3);
q.push(1);
q.push(7);
q.push(5);
q.push(9);
q.push(14);

q.toString();
console.log(q.pop());
console.log(q.peek());
console.log(q.length());