console.clear();    //largest common string
console.log('-----------------------------------');
//var s1 = 'hjklasdfyuikjegrdfbjnuoyiqwop onfunobnuweniusdnpciqwueiwaefnshi ihiwefiksdfhyiweji', s2 = 'rusyuiwekjdshcgreelshiuowiecniuynxqenuynqwkrmnib wqerybuiweynruqwniuyo', table = [], mem = [];
var s1 = 'usuresh', s2 = 'rusreeslh', table = [], mem = [];
function maxi(r, c) {
    var temp = 0;
    for (var i = 0; i < r; i++) {
        var row = table[i];
        for (var j = 0; j < c; j++) {
            if (row[j] > temp) {
                temp = row[j];
            }
        }
    }
    return temp;
}
function maxx(r, c) {
    if (mem[r] && mem[r][c]) {
        return mem[r][c];
    } else {
        var tempr = 0, tempc = 0;

        if (r - 1 >= 0) {
            if (mem[r - 1] && mem[r - 1][c]) {
                tempr = mem[r - 1][c];
            } else {
                tempr = maxx(r - 1, c);
            }
        }
        if (c - 1 >= 0) {
            if (mem[r] && mem[r][c - 1]) {
                tempc = mem[r][c - 1];
            } else {
                tempc = maxx(r, c - 1);
            }
        }
        if (r == 0 && c == 0) {
            if (!mem[0]) {
                mem[0] = [];
            }
            mem[0][0] = table[0][0];
        }
        var result = Math.max(tempr, tempc, table[r][c]);
        if (!mem[r]) {
            mem[r] = [];
        }
        mem[r][c] = result;
        return result;
    }
}
function mark(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            if (!table[i]) {
                table[i] = [];
            }
            if (s1[i] == s2[j]) {
                var max = i == 0 && j == 0 ? 0 : maxx(i - 1 >= 0 ? i - 1 : i, j - 1 >= 0 ? j - 1 : j);
                table[i][j] = max + 1;
            } else {
                table[i][j] = 0;
            }
        }
    }
    return maxi(table.length, table[table.length - 1].length);
}

// function dp(s1, s2) {
//     var result = 0;
//     if (s1.length != 0 && s2.length != 0) {
//         if (s1[s1.length - 1] != s2[s2.length - 1]) {
//             result = Math.max(mark(s1, s2.slice(0, s2.length - 1)), mark(s1.slice(0, s1.length - 1), s2));
//         } else {
//             result = 1 + dp(s1.slice(0, s1.length - 1), s2.slice(0, s2.length - 1));
//         }
//     }
//     return result;
// }
//mark();
var st = new Date().getTime();
console.log(mark(s1.split(''), s2.split('')));
console.log(((new Date().getTime() - st) / 1000).toFixed(5));
//console.log(table);
//console.log(max(table.length,table[0].length));


