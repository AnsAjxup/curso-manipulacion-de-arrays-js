const numbers = [1,30,49,29,10,13];
//buscar el 1er elemento que cumpla con la condicion
//con un for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log('for', rta);

//Con el metodo find :D
const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);

//ejemplo con una array de objetos
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);