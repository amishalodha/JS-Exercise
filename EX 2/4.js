var _ = require('lodash')

const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
]

var avg = _.mean([20, 40, 41, 17, 45, 51]);

console.log(avg);



const average = _.meanBy(members, (p) => p.age);
console.log(average);
