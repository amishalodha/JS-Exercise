
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






var result = _.every(members, function (value) {
    console.log(value.name);
    console.log(value.age);


})


var obj = _.each(members, function (value) {
    console.log(value.name);
    console.log(value.age);


})