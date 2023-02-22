const { readFileSync } = require('fs');

const data = readFileSync('file.txt', 'utf8');

console.log(data);

const data2 = readFileSync('file2.txt', 'utf8');

console.log(data2);
