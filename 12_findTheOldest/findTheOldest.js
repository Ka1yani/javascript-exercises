const findTheOldest = function( people ) {
    let age = [];
    people.forEach( person => age.push( person.yearOfDeath? person.yearOfDeath - person.yearOfBirth: new Date().getFullYear() - person.yearOfBirth) );
    return people[age.indexOf( Math.max.apply(null, age) )];
};

// Do not edit below this line
module.exports = findTheOldest;


/* let arr = [6, 3, 4, 2, 8];
    const brr = [...arr];
    arr.sort();
    console.log(arr);
    console.log(brr);
 */