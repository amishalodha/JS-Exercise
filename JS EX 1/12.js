const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swapnil Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
let [obj1, obj2, obj3, obj4, obj5, obj6, obj7] = members;

console.log(obj1.name)
console.log(obj1.age)

var result = { ...obj2 }
console.log(result)

var result = { ...obj3 }
console.log(result)


var result = { ...obj4 }
console.log(result)

var result = { ...obj5 }
console.log(result)

var result = { ...obj6 }
console.log(result)

var mem = { ...obj7 }
console.log(mem)




