console.clear();
console.log(window.performance.now());
var sure = [3, 7, 1, 9, -1, 6, 8, -3, 15, 17, 4, 11];

function conquer(a1, a2) {
  var tarr1 = a1, tarr2 = a2;
  var temp = [];
  while (tarr1.length != 0 && tarr2.length != 0) {
    if (tarr1[0] < tarr2[0]) {
      temp.push(tarr1[0]);
      tarr1.splice(0, 1);
    } else if (tarr1[0] > tarr2[0]) {
      temp.push(tarr2[0]);
      tarr2.splice(0, 1);
    } else {
      temp.push(tarr1[0]);
      temp.push(tarr2[0]);
      tarr1.splice(0, 1);
      tarr2.splice(0, 1);
    }
    if (0 == tarr2.length) {
      temp = temp.concat(tarr1);
      tarr1 = [];
    }
    if (0 == tarr1.length) {
      temp = temp.concat(tarr2);
      tarr2 = [];
    }
  }
  return temp;
}
function divide(array, fi, li) {
  var mi = Math.floor((fi + li) / 2);
  if (mi > 0) {
    var arr1 = fi != mi ? divide(array, fi, mi) : array.slice(mi, mi + 1);
    var arr2 = mi + 1 != li ? divide(array, mi + 1, li) : array.slice(li, li + 1);
    return conquer(arr1, arr2);
  } else if (mi == 0) {
    var arr = array.slice(fi, li + 1);
    if (li - fi === 0) {
      return arr;
    }
    if (arr[0] <= arr[1]) {
      return arr;
    } else {
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr;
    }
  } else {
    return [];
  }
}
console.log(window.performance.now());
console.log(sure);
console.log(window.performance.now());
console.log(divide(sure, 0, sure.length - 1));
console.log(window.performance.now());
