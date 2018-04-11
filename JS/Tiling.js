console.clear();
// function Box(l, b) {     //not needed
//     this.length = l;
//     this.breadth = b;
// }
// Box.prototype.getLength = function () {
//     return this.length;
// }
// Box.prototype.getBreadth = function () {
//     return this.breadth;
// }
//var sure = new Box(2, 4), b1 = new Box(1, 2), b2 = new Box(2, 1);
var max = 0, mem = [0,1,2];

function tile(b) {
    var b1=0,b2=0
    if(b==1 ||  b==0 || b==2){
        return mem[b];
    }
    if (b - 2 >= 0) {
        if(!mem[b-2]){
            mem[b-2]=tile(b - 2);
        }
        b2=mem[b-2];
    }
    if (b - 1 >= 0) {
        if(!mem[b-1]){
            mem[b-1]=tile(b - 1);
        }
        b1=mem[b-1];
    }
    mem[b]=b1+b2;
    return b1+b2;
}
var st = new Date().getTime();
tile(5100, 0);
console.log(((new Date().getTime() - st) / 1000).toFixed(5));
console.log(mem[mem.length-1]);