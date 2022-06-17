//ordenando meses, orden alfabetico de la 1ra letra
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

//ordenando numeros
const numbers = [1, 30, 4, 21, 100000];
//ordena mediante el 1er digito si solo usamos sort()
//numbers.sort();
//para ordenar de menor a mayor
numbers.sort((a,b) => a - b);
//para ordenar de mayor a menor
//numbers.sort((a,b) => b - a);
console.log(numbers);

//ordenar array
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
//ordena el array
//words.sort();
//esta forma es para asegurarnos que ordene incluso en versiones un tanto antiguas
//de navegadores
words.sort((a,b) => a.localeCompare(b));
console.log(words);

//ordenar array de objetos
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];
//ordenar por total de ordenes
orders.sort((a,b) => b.total - a.total);
console.log(orders);


//reto: ordenar el array de objetos mediante la fecha
const orders2 = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
];

//ordenar de la fecha mas antigua a la mas reciente
orders2.sort((a,b) => a.date - b.date);
console.log(orders2);

//ordenar de la fecha mas reciente a la mas antigua
orders2.sort((a,b) => b.date - a.date);
console.log(orders2);
