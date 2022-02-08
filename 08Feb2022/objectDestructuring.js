// Object destructuring assignment

const user = {
    id: 42,
    isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified);

var x = 10;
let y = 20;

{
    var x = 100;
    let y = 200;
}

console.log(x);
console.log(y);

let obj = {
    name: "bekki",
    age: 30,
};

{
    const name = 10;
    const age = 20;
}

console.log(name, age);

// array destructuring assignment

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
