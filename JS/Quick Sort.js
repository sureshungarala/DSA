console.clear();
var sure = [5, 8, -3, 7, 0, 4, 11];

function partition(arr, start, end) {
  var i = start, temp;
  for (var j = start; j < end; j++) {
    if (arr[j] < arr[end]) {
      temp = arr[i]; arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;
  return i;
}
function sort(arr, start, end) {
  if (start < end) {
    var pivot = partition(arr, start, end);
    sort(sure, start, pivot - 1);
    sort(sure, pivot + 1, end);
  }
}
console.log(sure);
sort(sure, 0, sure.length - 1);
console.log(sure);