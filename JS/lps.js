console.clear();    //longest possible sequence
var sure = 'abracadabra', mem = [];

function count(n) {
    for (var i = 0; i < n; i++) {
        if (!mem[i]) {
            mem[i] = [];
        }
        mem[i][i] = 1;
    }
    for (var i = 1; i < n; i++) {
        var k = 0;
        for (var j = i; j < n; j++) {
            //console.log(k, j);
            if (sure.charAt(k) == sure.charAt(j)) {
                mem[k][j] = 2 + mem[k + 1][j - 1];
            } else {
                mem[k][j] = Math.max(mem[k][j - 1], mem[k + 1][j]);
            }
            k++;
        }
    }
    return mem[0][n - 1];
}
console.log(count(sure.length));
console.log(mem);