console.clear();

// Priority Queue
/**
 * Priority Queue is an extension of queue with properties.
 * Following is the implementation of min-heap
 * Priority is based on element value(for this implementation)
 */
const Heap = require('./Heap_new.js');

const minHeap = new Heap(true, (item) => item.priority);

const data = [
  {
    value: 10,
    priority: 3,
  },
  {
    value: 8,
    priority: 5,
  },
  {
    value: 12,
    priority: 3,
  },
  {
    value: 15,
    priority: 1,
  },
  {
    value: 11,
    priority: 4,
  },
  {
    value: 12,
    priority: 1,
  },
  {
    value: 16,
    priority: 2,
  },
];

data.forEach((val) => minHeap.push(val));
console.log(minHeap.data);
minHeap.pop();
console.log(minHeap.data);
