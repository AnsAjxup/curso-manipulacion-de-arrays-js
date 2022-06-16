const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');

// sin map, se podria hacer la misma funcion con un for
// pero es mas complicado y para eso se invento map xD
/* const newArray = [];
for (let index = 0; index < letters.length; index++) {
     const element = letters[index];
    newArray.push(element + '++');
} */
console.log('original', letters);
console.log('new', newArray);