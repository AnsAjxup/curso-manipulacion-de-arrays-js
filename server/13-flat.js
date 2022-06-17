const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];
//aplanar una matriz en un array
//Con FOR
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

//con el metodo flat
const rta = matriz.flat(3);//el parametro que se le pasa es el de la profundidad de la matriz
console.log('flat', rta);
