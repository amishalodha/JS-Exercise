// get array of first names of everyone

const members = [
    { fname: 'laveesh', lname: 'gupta', age: 20 },

    { fname: 'yash', lname: 'jangid', age: 40 },

    { fname: 'firoz', lname: 'khan', age: 41 },

    { fname: 'amrit', lname: 'srivastava', age: 17 },

    { fname: 'chandraprakash', lname: 'sharma' },

    { fname: 'swapnil', lname: 'ahuja', age: 45 },

    { fname: 'yogesh', lname: 'khatri', age: 51 }];


//  members.forEach((members) => {
// console.log(members);
//})
//for (i=0; i < members.length; i++){
//console.log(members[i]);
// }
const finalMembers = members.map((member) => {
    return {
        // names: member.fname
        names: `${member.fname}`
    };

});
console.log(finalMembers);

