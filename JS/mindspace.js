var main = [];
function insert(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currVal = arr[i], j = i - 1;
        while (j >= 0 && currVal < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currVal;
    }
    main[main.length] = arr;
}
function chk(i, m, key) {
    var result;
    if (key == main[i][m]) {
        result = "" + i + " " + m;
    } else if (key > main[i][m] && m != main[i].length - 1) {
        m = Math.floor((m + main[i].length) / 2);
        return chk(i, m, key);
    } else if (key < main[i][m] && m != 0) {
        m = Math.floor((m + 1) / 2);
        return chk(i, m, key);
    }
    return result;
}
function search(key) {
    var temp;
    for (var i in main) {
        var m = Math.floor((main[i].length) / 2);
        temp = chk(i, m, key);
        if (temp) {
            break;
        }
    }
    if (temp) { return temp } else { return "-1 -1" };
}
var rl = require('readline');
var intrf = rl.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

var matsize, sizeflag = false, rowflag = false, rowcount = 0, columncount = 0, row = 0, isQ = false, qcount = 0, qvar = 0;
var searchArr = [];

intrf.on('line', function (data) {
    data = data.toString().trim(' ');
    if (!sizeflag) {
        matsize = data;
        sizeflag = true;
        var arr = matsize.split(' ');
        rowcount = parseInt(arr[0], 10);
        columncount = parseInt(arr[1], 10);
    } else if (row < rowcount) {
        insert(data.split(' ').slice(0, columncount + 1));
        row++;
    } else if (!isQ) {
        console.log(main);
        qcount = parseInt(data, 10);
        isQ = true;
    } else if (qvar < qcount) {
        searchArr.push(parseInt(data, 10));
        qvar++;
        if (qvar === qcount) {
            intrf.close();
            for (var i in searchArr) {
                console.log(search(searchArr[i]));
            }
        }
    }
});