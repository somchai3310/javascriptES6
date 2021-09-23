// Destructuring object

// เดิม
var person = {
    name: 'somchai',
    skill: 'java vuejs nuxtjs'
}

// var skill = person.skill
// console.log(skill);

// ใหม่
var player = {
    name: 'mus',
    skill: 'sql'
}
let {name,skill} = player
console.log('name ',name);
console.log('skill ',skill);
