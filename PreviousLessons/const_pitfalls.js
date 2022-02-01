const a = 10;
const b = false;
const c = "hello";
const d = {};
const e = [];
const f = function () {};
const g = null;
const h = undefined;

// a = 20;
// b = true;
// c = "world";
// d = {"hello": "world"};
// f = function () {
//     console.log("hello world");
// }

// g = null;
// a = 10;

const important = {
  index: 0,
};

// important = {
//   index: 0,
// };
console.log(important);

important.index = 10;
console.log(important);

const important2 = [10, 20, 30, 40, 50];

// important2 = [10, 20];

for (let i = 0; i < important2.length; i++) {
  important2[i] = important2[i] + 100;
}

console.log(important2);
