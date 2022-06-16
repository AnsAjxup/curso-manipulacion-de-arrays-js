const totals = [1,2,3,4];
//haciendo la suma de todos los elementos del array con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

//usando reduce :D
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);
