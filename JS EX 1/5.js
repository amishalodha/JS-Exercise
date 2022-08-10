const members = [{ name: 'laveesh gupta', age: 20 },
{ name: 'yash jangid', age: 40 },
{ name: 'firoz khan', age: 41 },
{ name: 'amrit srivastava', age: 17 },
{ name: 'chandraprakash sharma' },
{ name: 'swapnil ahuja', age: 45 },
{ name: 'yogesh khatri', age: 51 }
];

const result = Object.keys(members).reduce((acc, curr) =>
    acc.age ? (members[curr].age > acc.age ? members[curr] : acc) : members[curr], {});

console.log(result)
