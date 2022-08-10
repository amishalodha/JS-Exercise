const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swapnil Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

const arr = [
    { name: 'Amisha Lodha', age: 20 }, ...members
]
console.log(arr);




members.unshift(`name: "Amisha Lodha" , age:20`);
console.log(members);
