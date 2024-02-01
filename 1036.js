var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = input.trim().split(' ').map(Number);
const delta = Math.pow(B,2) - 4 * A * C;

if(A === 0 ||  delta < 0){
    console.log("Impossivel calcular");
} else {
    let x1 = (-B + Math.sqrt(delta)) / (2*A);
    let x2 = (-B - Math.sqrt(delta)) / (2*A);

    console.log("R1 = " + x1.toFixed(5));
    console.log("R2 = " + x2.toFixed(5));
}