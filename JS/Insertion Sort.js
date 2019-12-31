'use strict';
console.clear();

//var start=performance.now();
var arr = [2, 7, 3, 9, 1, 6, 10, 7, 9, 5, 14, 11];

for (var i = 1; i < arr.length; i++) {
  var currVal = arr[i], j = i - 1;
  while (j >= 0 && currVal < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = currVal;
  console.log(arr);
}
//console.log(performance.now()-start);
//console.log(arr);

/*
time complexity: worst case
(n-1)+(n-2)+(n-3)+.....+1=n(n-1)/2 ..... approx eq to n^2
*/