'use strict';
// BidInt

// const bidint = 1232457598467281365765105816n;
const someBigint = BigInt(1232457598467281365765105816);

console.log(2n === 2);   /// +, -, *, ==, ===, / - будет округлять полученое значение

let bidint = 1n;
let number = 2;

console.log(bidint + BigInt(number));
console.log(Number(bidint) + number);

