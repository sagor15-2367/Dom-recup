// not in js that frequently : range error
const numbers = [3, 2, 5, 6, 8];
// you should not do it (most of the time)
numbers.length = 2;
console.log(numbers);
console.log(numbers.length)
// console.log(numbers[23])

// reference error
// console.log(money);
var money = 90;

// SyntaxError

// for(let i=0;i<5 i++){

// }
let student={address:'Rangpur'};
console.log(student.address);