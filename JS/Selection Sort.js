'use strict';
console.clear();

//var start=performance.now();
var arr = [2, 7, 3, 9, 1, 6, 10, 7, 9, 5, 14, 11];

for (var i = 0; i < arr.length; i++) {
  var minIndex = i;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  if (i != minIndex) {
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
//console.log(performance.now()-start);
console.log(arr);

/*
time complexity:
(n-1)+(n-2)+(n-3)+.....+1=n(n-1)/2 ..... approx eq to n^2
*/