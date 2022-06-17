const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//fucionar dos arreglos
//con FOR
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

//usando el metodo concat :D
const rta = elements.concat(othersElements);
console.log('concat', rta);
//otra forma de concatenar arrays con spread operation(...)
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);
//hay que tener cuidado con spread operation, ya que maneja bien
//la concatenacion de array pero si se le pasa un string
//lo separa letra por letra. ejemplo:
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

//otra forma de concatenar pero mutando(modificando) el array original 
elements.push(...othersElements);
console.log('elements', elements);

//Si estas trabajando con un arrays de Objs igual una forma
//de copiar cada elemento sin la referencia podría ser:
const myArray = [
    {name: 'jose', age: 17},
    {name: 'carlos', age: 18},
    {name: 'Angel', age: 19},
];

const newArray2 = myArray.map(a => ({...a}));
console.log(myArray);
console.log(newArray2);