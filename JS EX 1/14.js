// reduce function on array

const arr = [4, 6, 8, 1, 3];

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);


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

const result = obj.reduce((acc, curr) => {
    return acc + curr.id
}, 0)

console.log(result);



