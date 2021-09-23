// spread operator
// การกระจายค่า

// array
let fruit = ['mango', 'watermelon']
console.log('fruit ', fruit);

let newFruit = [...fruit, 'Durian', 'banana']
console.log('newFruit ', newFruit);

// obj
let product = { name: 'Durian', price: 200 }
console.log('product', product);

let newProduct = { ...product, category: 'Fruit' }
console.log('newProduct', newProduct);

let newPrice = { ...newProduct, price: 500 }
console.log('newPrice', newPrice);