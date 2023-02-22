const { writeFileSync, readFileSync } = require('fs');

// fiel path relative to app.js
writeFileSync('./my-file.txt', 'Invat node.js');

const data = readFileSync('my-file.txt', 'utf8');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const fullDate = `${day}/${month}/${year}`;

const message = `${data} azi ${fullDate}`;

writeFileSync('./my-file2.txt', message);
