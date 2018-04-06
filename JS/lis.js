console.clear();
var sure = [10, 22, 9, 21, 33, 50, 41, 60], op = [];

for (var i = 0; i < sure.length; i++) {
    op.push(1);
}
for (var i = 1; i < sure.length; i++) {
    for (var j = 0; j < i; j++) {
        if (sure[i] > sure[j] && op[i] < op[j] + 1) {
            op[i] = op[j] + 1
        }
    }
}
var temp = op[0];
for (var i in op) {
    if (op[i] > temp) {
        temp = op[i];
    }
}
console.log(temp);