console.clear();
var sure = [1, 5, 6, 9], val = 11, min = Number.MAX_VALUE;
sure = sure.sort(function (a, b) {
    return a < b;
});
console.log(sure);
//console.log(min);
function calc(val, num) {
    if (val == 0) {
        return num;
    }
    var temp = Number.MAX_VALUE;
    for (var i = 0; i < sure.length; i++) {
        if (val >= sure[i]) {
            var min_till = calc(val - sure[i], num + 1);
            if (min_till != Number.MAX_VALUE && min_till < temp) {
                temp = min_till;
            }
        }
    }
    if(min > temp){
        min = temp;
    }
    return temp;
}
calc(val, 0);
console.log(min);