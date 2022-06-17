const elements = ["Fire", "Air", "Water"];
//unir los elementos de un array en un solo string
//con FOR
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for', rtaFinal);

//usando el metodo join :D
const rta = elements.join('--')
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

//ejemplo, convirtiendo un string a url
//SPLIT convierte un strin a array teniendo en cuenta el parametro que se le pase como separador
//toLowerCase convierte el string a minusculas
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

console.log(title.split('de'));