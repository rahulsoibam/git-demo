// let i = 10;
// console.log(i);

var i = 9999;

var insideVar = 0.9;
for (var i = 0; i < 1; i++) {
  var insideVar = 111;
  console.log(i);
  console.log(insideVar);
}

console.log(i);

console.log(insideVar);
