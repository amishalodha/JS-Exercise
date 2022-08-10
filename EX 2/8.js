var _ = require('lodash');

const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
]


var Obj1 = _.find(members, { name: 'Laveesh Gupta', age: 20 });
var Obj = _.find(members, { name: 'Yash Jangid', age: 40 });

console.log(Obj1);
console.log(Obj);