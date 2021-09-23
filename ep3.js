// ep3 Default Parameter
const addUser = (name, last, city="BKK") => {
    return `name ${name} last ${last} city ${city}`
}

console.log(addUser('mus','kkk','CNX'));
console.log(addUser('ZZZ','zZz'));