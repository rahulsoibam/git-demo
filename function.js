const add = function (x, y) {
  return x + y;
};

console.log(add(1, 2));

const z = function (x, y) {
  return x + y;
};

console.log(z(1, 2));

function z2(x, y) {
  return x + y;
}

console.log(z2(1, 2));

function z3(x, y) {
  return add(x, y);
}

console.log(z3(1, 2));

const subtract = function (x, y) {
  return x - y;
};
const higherOderFunction = function (f, x, y) {
  return f(x, y);
};

console.log(higherOderFunction(add, 1, 2));
console.log(subtract(1, 2));

console.log(higherOderFunction(subtract, 1, 2));

console.log(add(1, 3));

// Recursion demo

// print the sum of all numbers from 1 to n
const printSum = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(printSum(10));

const recursivePrintSum = function (n) {
  if (n === 1) {
    return 1;
  } else {
    return n + recursivePrintSum(n - 1);
  }
};

console.log(recursivePrintSum(10));

const fibbonacci = function (n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};

console.log(fibbonacci());

const recursiveFibbonacci = function (n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return recursiveFibbonacci(n - 1) + recursiveFibbonacci(n - 2);
  }
};

console.log(recursiveFibbonacci(1));

const add10 = (x) => {
  return x + 10;
};

console.log(add10(1));

let arr = [1, 2, 3, 4, 5];

arr.forEach(function (x) {
  console.log(x * x * x);
  console.log(x * 2);
});

arr.forEach((x) => {
  console.log(x * x * x);
  console.log(x * 2);
});

const addBetter = (x, y) => {
  return x + y;
};

console.log(addBetter(1, 2));
