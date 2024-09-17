const input = require('sync-input')
console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log('Ice cream: $2250');
console.log('Milk chocolate: $1680');
console.log('Doughnut: $1075');
console.log('Pancake: $80');

const total = 202 + 118 + 2250 + 1680 + 1075 + 80;
console.log(`Income: $${total}`);
console.log("Staff expenses:");
const staff = input()
console.log("Other expenses:");
const other = input()
console.log(`Net income: $${total - staff - other}`);