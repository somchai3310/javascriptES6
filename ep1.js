// ep1 Block Scope & Variable
// global , local -> block scope
var price = 20
// define
var fruit = "มะม่วง"
console.log('-----use var-----');

if (price === 20) {
    // update var fruit
    var fruit = "ส้มโอ"
    console.log('in condition', fruit)
}
console.log('out condition', fruit)

// use let
let price2 = 20
let fruit2 = "มะม่วง"
console.log('-----use let-----');

if (price2 === 20) {
    let fruit2 = "ส้มโอ"
    console.log('in condition', fruit2)
}
console.log('out condition', fruit2)

// constant
// cannot update
const total = 100
// total=50 
console.log(total);

// can update
const person = { name: 'mus', last: 'khakrachang' }
person.name = 'ark'
console.log('person', person);