const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
    address: {
        state: "Manipur",
        pincode: "787878",
    },
    distance: () => {
        return "1.2 miles";
    },
};

// const dogName = adventurer.dog.name;
// console.log(dogName);
// expected output: undefined

const country = adventurer?.address?.country?.name; // Optional chaining operator
console.log(country ?? "Not Found");

console.log(adventurer.someNonExistentMethod);
// expected output: undefined

console.log(adventurer.distance?.());

console.log("Hello world");
