import fetch from "node-fetch";

const response = await fetch("https://api.github.com/users/rahulsoibam");
const body = await response.json();

console.log(body.avatar_url);
