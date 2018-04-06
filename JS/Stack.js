console.clear();
function Stack() {
	this.data = [];
}
Stack.prototype.push = function (data) {
	this.data.unshift(data);
}
Stack.prototype.pop = function () {
	return this.data.shift();
}
Stack.prototype.peek = function () {
	return this.data[0];
}
Stack.prototype.toString = function () {
	console.log('[ ' + this.data.toString() + ' ]');
}
Stack.prototype.length = function () {
	return this.data.length;
}
var stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(1);
stack.push(7);
stack.push(5);
stack.push(9);
stack.push(14);

stack.toString();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.length());