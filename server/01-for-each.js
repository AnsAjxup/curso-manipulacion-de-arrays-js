const letters = ['a','b','c'];
//con for podemos recorrer el array pero es un proceso mas engorroso
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

//usando .forEach se nos facilita el trabajo
letters.forEach(item => console.log('forEach', item))