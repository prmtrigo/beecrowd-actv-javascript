const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const R = parseFloat(lines[0]);
const pi = 3.14159;

const A = pi * Math.pow(R, 2);

console.log("A=" + A.toFixed(4));
