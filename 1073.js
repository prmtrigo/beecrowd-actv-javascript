var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(input.trim());

for (let i = 2; i <= N; i += 2) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`);
}