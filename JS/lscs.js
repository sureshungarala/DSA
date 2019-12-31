console.clear();    //largest sequence with longest sequence
var sure = [-2, -3, 4, -1, -2, 1, 5, -3], op = [];
for (var i = 0; i < sure.length; i++) {
    if (!op[i]) {
        op[i] = [];
    }
    op[i][i] = sure[i];
}
for (var i = 1; i < sure.length; i++) {
    var k = 0;
    for (var j = k + i; j < sure.length; j++) {
        op[k][j] = op[k][j - 1] + sure[j];
        k++;
    }

}
//console.log(op);
var max = -1000, sub = [];
for (var i = 0; i < op.length; i++) {
    for (var j = 0; j < op[i].length; j++) {
        if (op[i][j] > max) {
            max = op[i][j];
            sub = sure.slice(i, j + 1);
        }
    }
}
console.log(sub);