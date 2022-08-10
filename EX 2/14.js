// reduce function on array

var _ = require('lodash')



const arr = [4, 6, 8, 1, 3];


var result = _.reduce(arr, function sum(acc, curr) {
    return acc + curr
}, 0)

console.log(result);

// IN OBJECT

const obj = [
    {
        id: 1,
        name: 'amisha'
    },
    {
        id: 2,
        name: 'astha'
    },
    {
        id: 3,
        name: 'kavita'
    },
    {
        id: 4,
        name: 'anjali'
    }
];

var result = _.reduce(obj, function sum(acc, curr) {
    return acc + curr.id;
}, 0);
console.log(result);
