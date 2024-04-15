/**
 * [1,2]
 * Heap is a binary tree representation of data as such the parent is either
 * less than or greater than the child for min-heap and max-heap respectively.
 *
 * So, the top most / root of the heap is either the smallest or greatest.
 * Plotting this binary tree in a array representation
 * Assuming this is a min-heap and smallest node/value at root is at index 0,
 * Next smallest values/child nodes of the root would be at indices 1 & 2.
 * and next smallest values(after values at indices 1, 2) would be 3,4 & 5,6.
 *                                  6
 *                               2     3
 *                              4  5  6  7
 * Mapping this tree in an array would like,
 * [1,2,3,4,5,6,7] with parent of each child at index i would be at (i/2 - 1) index.
 *
 * @param {Array} minHeap
 */

/**
 *
 * @param {*} minHeap
 */
function Heap(minHeap = true, valueToCompare = (a) => a) {
  this.data = [];
  this.isMinHeap = minHeap;
  this.valueToCompare = valueToCompare;
}

Heap.prototype.push = function (value) {
  this.data.push(value);
  this.siftUp();
};

Heap.prototype.peek = function () {
  return this.data.length === 0 ? null : this.data[0];
};

Heap.prototype.pop = function () {
  if (this.data.length === 0) return null;
  const first = this.data[0];
  const last = this.data.pop();

  if (first !== last) {
    this.data[0] = last;
    this.siftDown();
  }
  return first;
};

Heap.prototype.siftUp = function () {
  let currentIndex = this.data.length - 1;
  while (currentIndex > 0) {
    let current = this.data[currentIndex];
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    let parent = this.data[parentIndex];
    if (this.valueToCompare(parent) > this.valueToCompare(current)) {
      this.data[parentIndex] = this.data[currentIndex];
      this.data[currentIndex] = parent;
      currentIndex = parentIndex;
    } else {
      return;
    }
  }
};

Heap.prototype.siftDown = function () {
  let heapLength = this.data.length;
  let parentIndex = 0;
  while (parentIndex <= heapLength) {
    let leftIndex = 2 * parentIndex + 1;
    let rightIndex = 2 * parentIndex + 2;
    let parent = this.data[parentIndex];
    let left = this.data[leftIndex];
    let right = this.data[rightIndex];
    if (
      leftIndex < heapLength &&
      this.valueToCompare(parent) > this.valueToCompare(left)
    ) {
      if (
        this.valueToCompare(parent) > this.valueToCompare(right) &&
        this.valueToCompare(left) > this.valueToCompare(right)
      ) {
        this.data[leftIndex] = right;
        this.data[rightIndex] = left;
      }
      this.data[parentIndex] = this.data[leftIndex];
      this.data[leftIndex] = parent;
      parentIndex = leftIndex;
    } else if (
      rightIndex < heapLength &&
      this.valueToCompare(parent) > this.valueToCompare(right)
    ) {
      this.data[parentIndex] = right;
      this.data[rightIndex] = parent;
      parentIndex = rightIndex;
    } else {
      return;
    }
  }
};

const heap = new Heap();
const startTime = performance.now();
heap.push(10);
console.log(performance.now() - startTime);
heap.push(12);
// console.log(heap.data);
heap.push(8);
// console.log(heap.data);
heap.push(34);
// console.log(heap.data);
heap.push(4);
// console.log(heap.data);
heap.push(36);
// console.log(heap.data);
heap.pop();
// console.log(heap.data);
heap.push(11);
// console.log(heap.data);
heap.push(9);
// console.log(heap.data);
heap.pop();
// console.log(heap.data);

module.exports = Heap;
