const fs = require('fs');
const os = require('os');

// save
const guests = [];

guests.push({
    name:"name1",
    address: "add1"
});
fs.writeFileSync("J_data.json"); 