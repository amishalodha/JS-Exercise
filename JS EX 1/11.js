const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];


const [res1, res2, res3, res4, res5, res6] = members

const { age: obj1 } = res1
const { age: obj2 } = res2
const { age: obj3 } = res3
const { age: obj4 } = res4
const { age: obj5 } = res5
const { age: obj6 } = res6

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)
