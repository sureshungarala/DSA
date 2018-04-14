//travelling salesman problem
console.clear();
var sure = [[0, 10, 15, 20],
[10, 0, 35, 25],
[15, 35, 0, 30],
[20, 25, 30, 0]];

var minPath = Number.MAX_SAFE_INTEGER, marr = [0, 1, 2, 3];

function find(arr, k, m) {
    arr = arr.filter(function (num) {
        return num != k;
    });
    var min = Number.MAX_SAFE_INTEGER;
    if (arr.length > 1) {
        for (var i = 0; i < arr.length; i++) {
            var temp = sure[k][arr[i]] + find(arr, arr[i], m);
            if (temp < min) {
                min = temp;
            }
        }
    } else {
        return sure[k][arr[0]] + sure[arr[0]][m];
    }
    return min;
}
for (var i = 0; i < marr.length; i++) {
    var temp = find(marr, marr[i], marr[i]);
    if (minPath > temp) {
        minPath = temp;
    }
}
console.log(minPath);
