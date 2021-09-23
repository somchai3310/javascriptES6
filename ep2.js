// ep2 arrow function
// normal function
function sumPoint(a, b) {
    return a + b
}

// arrow function
const sumArrow = (a, b) => a + b

const sumArrow2 = a => a + 200

const student = name => ({ name: name, age: 20 })

// want more than 1
const sumArrow3 = (a, b) => {
    console.log('arrow more than 1');
    return a + b
}

let result = sumPoint(20, 50)
console.log('normal', result);

let resultArrow1 = sumArrow2(10)
console.log('arrow', resultArrow1);

let resultArrow2 = sumArrow3(10, 20)
console.log('arrow', resultArrow2);

let showStudent = student('somchai')
console.log(showStudent);