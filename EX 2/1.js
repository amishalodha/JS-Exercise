const _ = require('lodash')
const members = [
    { fname: 'laveesh', lname: 'gupta', age: 20 },

    { fname: 'yash', lname: 'jangid', age: 40 },

    { fname: 'firoz', lname: 'khan', age: 41 },

    { fname: 'amrit', lname: 'srivastava', age: 17 },

    { fname: 'chandraprakash', lname: 'sharma' },

    { fname: 'swapnil', lname: 'ahuja', age: 45 },

    { fname: 'yogesh', lname: 'khatri', age: 51 }];

const userName = _.map(members, user => {
    return user.fname
});

console.log(userName);
