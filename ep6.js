// Template Literals
// แบบเดิม

const name = 'somchai'
const last = 'xxx'
const city = 'BKK'

const all = 'Name = ' + name + ' last = ' + last + ' city = ' + city
console.log(all);

// แบบใหม่
const allPerson = `Name = ${name} last = ${last} city = ${city}`
console.log(allPerson);