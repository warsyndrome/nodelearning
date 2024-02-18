const {readFile, writeFile} = require('fs');


const first = readFile('./content/first.txt', 'utf-8');
const second = readFile('./content/subfolder/test.txt', 'utf-8');

console.log(first, second);

writeFile('./content/result-sync.txt', `here is the result : ${first}, ${second}`,
{flag: 'a'});


