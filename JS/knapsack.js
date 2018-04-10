console.clear();
var sack = [10, 20, 30, 20], wts = [50, 40, 70, 90], max = 50, mem = [];

function find(wt, w) {
    if (mem[w] && mem[w][wt]) {
        return mem[w][wt];
    } else {
        if (wt == 0 || w == 0) {
            return 0;
        }
        if (!mem[w - 1]) {
            mem[w - 1] = [];
        }
        if (!mem[w - 1][wt]) {
            mem[w - 1][wt] = find(wt, w - 1);
        }
        if (sack[w - 1] > wt) {
            return mem[w - 1][wt];
        }
        if (!mem[w - 1][wt - sack[w - 1]]) {
            mem[w - 1][wt - sack[w - 1]] = find(wt - sack[w - 1], w - 1);
        }
        return Math.max((wts[w - 1] + mem[w - 1][wt - sack[w - 1]]), mem[w - 1][wt]);
    }
}
var st = new Date().getTime();
console.log(find(50, wts.length));
console.log(((new Date().getTime() - st) / 1000).toFixed(5));