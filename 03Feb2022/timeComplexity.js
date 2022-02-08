// O(1)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find the 5th element

console.log(arr[4]);

// When n increases, number of operations remain the same

// O(log n)

// O(n) where n is the length of array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 100;
let found = false;

for (let i = 0; i < arr2.length; i++) {
  if (arr[i] === target) {
    found = true;
    console.log("FOUND!");
  }
}
if (found == false) console.log("NOT FOUND");

// O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};

// O(log n)
