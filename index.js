// let path = require("path")

// let floder = path.join("hari","kani","merriage.txt")

// console.log(floder)

const addDays = require("date-fns/addDays");
const result = addDays(new Date(2021, 0, 11), 10);

console.log(result);