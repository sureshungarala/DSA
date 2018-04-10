console.clear();
'use strict';
var eg = 6, fl = 8, mem = [];

function find(e, f) {
    if (!mem[e]) {
        mem[e] = [];
    }
    if (mem[e][f]) {
        return mem[e][f];
    } else {
        var b = 0;
        if (f == 0 || f == 1) {
            return f;
        }
        if (1 == e) {
            return f;
        }
        var result = Number.POSITIVE_INFINITY;
        for (var i = 1; i <= f; i++) {
            var min, temp0, temp1;
            if (!mem[e - 1]) {
                mem[e - 1] = [];
            }
            temp0 = mem[e - 1][i - 1];
            if (!temp0) {
                mem[e - 1][i - 1] = find(e - 1, i - 1);
                temp0 = mem[e - 1][i - 1];
            }
            temp1 = mem[e][f - i];
            if (!temp1) {
                mem[e][f - i] = find(e, f - i);
                temp1 = mem[e][f - i];
            }
            var min = Math.max(temp0, temp1);
            if (result > min) {
                result = min;
            }
        }
        mem[e][f] = result + 1;
        return result + 1;
    }
}
var st = new Date().getTime();
console.log(find(eg, fl));
console.log(((new Date().getTime() - st) / 1000).toFixed(5));
console.log(mem);