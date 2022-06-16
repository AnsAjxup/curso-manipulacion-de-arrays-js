const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

//forma un nuevo array con las palabras que tengan 6 o mas letras
//usando un for
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );

//usando .filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );

//otro ejemplo, usando filter con un array con objetos
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

//buscador de ordenes
const search = (query) => {
    return orders.filter(item => {
        //el método includes() determina si una matriz incluye
        //un determinado elemento, devuelve true o false según corresponda.
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('Val'));


//reto
const array = ['amor', 'sol', 'piedra', 'día'];
function solution(array) {
	return array.filter(item => item.length >= 4);
}; 

const output = solution(array);

console.log(array);
console.log(output);