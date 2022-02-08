const recursiveFibbonacci = function (n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return recursiveFibbonacci(n - 1) + recursiveFibbonacci(n - 2);
  }
};

console.log(recursiveFibbonacci(52));
