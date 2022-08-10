const members = [
    { name: 'laveesh gupta', age: 20 },
    { name: 'yash jangid', age: 40 },
    { name: 'firoz khan', age: 41 },
    { name: 'amrit srivastava', age: 17 },
    { name: 'chandraprakash sharma', age: 15 },
    { name: 'swapnil ahuja', age: 45 },
    { name: 'yogesh khatri', age: 51 }
];

function getAvg(arr) {
    return (members.reduce((acc, { age }) => (acc + age), 0)) / arr.length;
}
console.log(getAvg(members));