const fs = require("fs");

// Sample data (FindIt style)
const items = [
{
title: "Wallet",
description: "Black leather wallet",
status: "lost"
},
{
title: "Phone",
description: "iPhone 13",
status: "found"
}
];

// Write data to file
fs.writeFileSync("items.json", JSON.stringify(items, null, 2));
console.log("Items written to file successfully");

// Read data from file
const data = fs.readFileSync("items.json", "utf-8");
const parsedData = JSON.parse(data);

console.log("Items read from file:");
console.log(parsedData);