const fs = require('fs');

const data = fs.readFileSync('./dictionary.txt', {
  encoding: 'utf8',
  flag: 'r',
});

console.log(data.split('\n'));

fs.writeFileSync('./dictionary.json', JSON.stringify(data.split('\n')));
