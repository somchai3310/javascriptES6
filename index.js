// computed property name

// key:value
let food1 = {
    name: 'ข้าวมันไก่',
    price: 40
}

let food2 = {
    'name': 'ข้าวมันมะม่วง',
    'price': 250
}

let user = {
    ['user' + 1 * 10]: 'mus',
    ['user' + 2 * 20]: 'somchai'
}

// key dynamic
let newName = 'Cake'
let food3 = [
    { newName: 'Cake มะม่วง', price: '250' },
    { newName: newName + ' มะม่วง', price: '250' },
    { [newName]: `${newName} มะม่วง`, price: '250' },
    { [newName]: `${newName} มะม่วง`, [`${newName} mix`]: 'ผลไม้มะม่วง' }
    //เปลี่ยน key จาก newName เป็น Cake
]

console.log(food1);
console.log(food2);
console.log(food3);
console.log(user);