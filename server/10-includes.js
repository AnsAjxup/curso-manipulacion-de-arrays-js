const pets = ['cat', 'dog', 'bat'];
//validamos si un elemento existe o no dentro del array
//con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

//con el metodo includes :D
//este metodo no necesita de un arrow function
//simplemente se le pasa el parametro
//funciona con strings(cadenas de texto) y con arrays
//al no recibir un arrow function se dificulta trabajar con objetos
const rta = pets.includes('dog')
console.log('includes', rta);

//desafio buscador
const words = ['hola', 'adios', 'día', 'noche'];

function solution(words, query) {
	return words.filter(word => word.includes(query));
}; 

console.log(solution(words, 'día'));