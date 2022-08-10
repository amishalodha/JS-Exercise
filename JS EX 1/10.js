const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swapnil Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

const [...rest] = members;

console.log(rest);