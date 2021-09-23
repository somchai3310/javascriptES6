// rest operator

const addUser = (name, lastName, ...city) => {
    return `name: ${name} lastName: ${lastName} city: ${city}`
}

console.log(addUser('สมชาย', 'ขาวกระจ่าง', 'CNX', 'BKK'))

const addMessage = (first, ...message) => {
    return message.map(m => first + message)
}
console.log(addMessage('Hello', 'Vuejs', 'Nuxtjs','js'));

const addNumber = (...number) => {
    return number.reduce((first, current) => {
        return first + current
    })
}
console.log(addNumber(10, 20, 30, 40));