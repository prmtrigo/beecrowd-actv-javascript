var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(input.trim());

if(X%2 === 0){
    X++;
}

for(let i = 0; i < 6; i++){
    console.log(X+2*i);
}