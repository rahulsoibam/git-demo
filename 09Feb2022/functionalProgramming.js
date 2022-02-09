// Higher order functions
// Higher order functions are functions that
// take other functions as arguments or return functions as their result.
// They are also called first class functions.

let arr = ["Bekki", "Bimananda", "Thiyam", "Sourav"];

function printer(input) {
    console.log(input);
}

arr.map((name) => {
    console.log(name);
});

arr.map(function (name) {
    console.log(name);
});

arr.map((name) => {
    printer(name);
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);

let sum2 = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum2);

const func = (a, b) => {
    return a + b;
};

console.log(typeof func);

func.help = "This is a help message"; // NOT RECOMMENDED!!!

console.log(func.help);
console.log(func(10, 10));

const higherOrderFunction = (func, input) => {
    // input = input.toLowerCase();
    console.log(input);
    func(input);
};

function print(input) {
    console.log(input);
}

higherOrderFunction(print, "Hello World");
higherOrderFunction(print, "SHOUTING HELLO WORLD");

const square = (x) => {
    console.log(x ** 2);
};

higherOrderFunction(square, 10);

higherOrderFunction((x) => {
    // Lambda, anonymous function
    console.log(x ** 3);
}, 8);

higherOrderFunction(function (x) {
    console.log(x ** 3);
}, 8);

// For each

const arrNames = ["Bekki", "Bimananda", "Thiyam", "Sourav"];

let forEachedArrNames = arrNames.forEach((name) => {
    name = name.toUpperCase();
    console.log(name);
});

arrNames.forEach((element, index) => {
    console.log(element, index);
});

arrNames.forEach((element, index, array) => {
    console.log(element, index, array);
});

let mappedArrNames = arrNames.map((name) => {
    name = name.toUpperCase();
    console.log(name);
    return name;
});

// Object oriented way
// for (let i = 0; i < arrNames.length; i++) {
//     // loop construct
//     arrNames[i] = arrNames[i].toUpperCase();
//     console.log(arrNames[i]);
// }

console.log(forEachedArrNames);
console.log(arrNames);
console.log(mappedArrNames);

let sum1 = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum1 = sum1 + num));
console.log(sum1);

const countries = [
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Nigeria",
    "New Zealand",
    "Nepal",
];

countries.forEach((country) => {
    console.log(country.toUpperCase());
});

console.log(countries);

// MAP
let modifiedCountries = countries.map((country) => {
    return country.toUpperCase();
});
console.log(modifiedCountries);

let numberedModifiedCountries = countries.map((country, index) => {
    return `${index + 1}. ${country.toUpperCase()}`;
});
console.log(numberedModifiedCountries);

let zzz = countries.map((country, index, array) => {
    return `${index + 1}. ${country.toUpperCase()} out of ${array}`;
});

console.log(zzz);

console.log(`Hello`.toUpperCase());

console.log("Hello".split(""));

let nestedArray = [1, 2, 3, [40, 41, 42, [430, 431, 432]]];

nestedArray.map((element) => {
    console.log(element);
});
console.log(nestedArray[3][3][0]);

let str = "Hello World";

// REDUCE

// FILTER
let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let greaterThan5 = numbs.filter((n) => {
    return n > 5;
});
console.log(greaterThan5);

console.log(countries);
let countriesContainingLand = countries.filter((country) => {
    return country.startsWith("Ne");
});

console.log(countriesContainingLand);
// () parentheses, {} curly braces, [] square brackets

const scores = [
    { name: "Asabeneh", score: 95 },
    { name: "Lidiya", score: 98 },
    { name: "Mathias", score: 80 },
    { name: "Elias", score: 50 },
    { name: "Martha", score: 85 },
    { name: "John", score: 100 },
];

const scoreGreaterThan50 = scores
    .map((person) => person.score)
    .filter((s) => {
        console.log(s);
        return s > 50;
    });

console.log(scoreGreaterThan50);

let sumOfScoresGreaterThan50 = scores
    .map((person) => {
        return person.score;
    })
    .filter((score) => {
        return score > 85;
    })
    .reduce((acc, curr) => {
        return acc + curr;
    }, 0);

console.log(sumOfScoresGreaterThan50);

// Reduce
// Sum of squares of numbers 1 to 10
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquares = numbers2.reduce((acc, curr) => {
    return acc + curr ** 2;
}, 0);

console.log(sumOfSquares);

const product = numbers2.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(product);

let unsorted = ["Hello", "Bekki", "Bimananda", "Thiyam", "Sourav"];

console.log(unsorted.sort());
