const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
    console.log(map);
  }

  return null;
};

// twoSum([2, 7, 11, 15], 26);

umap = { hello: 25, world: 15 };

// console.log("25" in umap);  // O(1) time operation

// Linear Search Algorithm
// Language: javascript
// Path: linear-search.js
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearSearch(arr));

console.log(Math.round(3.7));
console.log(Math.floor(3.7));
console.log(Math.ceil(3.7));

const binarySearch = (arr, target, low, high) => {
  // Base case
  if (high < low) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  // Termination condition
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
};

// Binary Search Algorithm Iterative
const binarySearchIterative = (arr, target) => {
  let mid = Math.floor(arr.length / 2);
  let low = 0;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    mid = Math.floor((low + high) / 2);
  }
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 9, 0, arr.length - 1));

console.log(binarySearchIterative(arr, 10));
