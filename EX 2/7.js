
// var _ = require('lodash')

// const members = [
//     { name: 'Laveesh Gupta', age: 20 },
//     { name: 'Yash Jangid', age: 40 },
//     { name: 'Firoz Khan', age: 41 },
//     { name: 'Amrit Srivastava', age: 17 },
//     { name: 'Chandraprakash Sharma' },
//     { name: 'Swapnil Ahuja', age: 45 },
//     { name: 'Yogesh Khatri', age: 51 }
// ];

// const obj = members
// obj[2].Field = "Information technology"
// console.log(members);


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

var count = 0;
Object.keys(members).forEach(function (key) {
    count++;
    if (count == 2) {
        _.set(members[key], 'field ', 'IT');
    }

});
console.log(members);