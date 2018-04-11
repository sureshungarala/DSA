console.clear();
function Box(l, b, h) {
    this.length = l;
    this.breadth = b;
    this.height = h;
}
Box.prototype.getLength = function () {
    return this.length;
}
Box.prototype.getBreadth = function () {
    return this.breadth;
}
Box.prototype.getHeight = function () {
    return this.height;
}
var sure = [new Box(1, 2, 3), new Box(2, 3, 1), new Box(3, 1, 2), new Box(4, 5, 6), new Box(6, 4, 5), new Box(5, 6, 4), new Box(10, 12, 32), new Box(32, 10, 12), new Box(12, 32, 10)];
sure = sure.sort(function (o1, o2) {
    return o1.getLength() * o1.getBreadth() < o2.getLength() * o2.getBreadth();
});
//console.log(sure);
var op=[];
function pile() {

    for (var i = 1; i < sure.length; i++) {
        var temp=sure[i].getHeight();
        for (var j = i-1; j >=0; j--) {
            if (sure[i].getLength() < sure[j].getLength() || sure[i].getBreadth() < sure[j].getBreadth()) {
                temp=temp+sure[j].getHeight();
            }
        }
        op.push(temp);
    }
    op=op.sort();
}
pile();
console.log(op[op.length-1]);
