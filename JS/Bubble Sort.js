'use strict';
console.clear();
//var start=performance.now();
var arr = [2, 7, 3, 9, 1, 6, 10, 7, 9, 5, 14, 11];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
//console.log(performance.now()-start);
console.log(arr);

/*
time complexity:
n+(n-1)+(n-2)+(n-3)+.....+1=n(n+1)/2 ..... approx eq to n^2
*/