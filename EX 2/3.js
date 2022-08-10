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

var array = []
var result = _.map(members, function get(values) {
    if (values.age >= 41 && values.age <= 60) {
        array.push(values)
    }
})
console.log(array);
