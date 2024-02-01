var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [X, Y] = input.trim().split('\n').map(Number);

function ehImpar(num){
    return num % 2 !== 0;
}

let contador = 0;

for(let i = Math.min(X,Y) + 1; i < Math.max(X,Y); i++){
    if (ehImpar(i)){
        contador += i;
    }
}

console.log(contador);