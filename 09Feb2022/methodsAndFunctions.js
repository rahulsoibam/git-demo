const person = {
    firstName: "Johnson", // fields
    lastName: "Thiyam",
    age: 25,
    country: "India",
    hobbies: ["cricket", "football", "hockey"],
    address: {
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700001",
    },
    getFullName: () => {
        // method
        return `${person.firstName} ${person.lastName}`;
    },
    walk: () => {
        console.log("I am walking");
    }
    "12hello": "world",
};

person.firstName = "Bekki";
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["12hello"]);
console.log(person.lastName);
console.log(person.age);
console.log(person.country);
console.log(person.hobbies);
console.log(person.address);

// Print the full name of the person
console.log(person.firstName + " " + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);

const printPerson = () => {
    // function
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.getFullName());
    console.log(person.age);
    console.log(person.country);
    console.log(person.hobbies);
    console.log(person.address);
};

console.log(person.getFullName());

// A function that is defined inside an object is called a method
// A function that is defined outside an object is called a function
