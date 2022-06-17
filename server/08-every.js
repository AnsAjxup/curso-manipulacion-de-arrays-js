const numbers = [1,30,39,29,10,13];
//verifica que todos los num sean <= a 40
//solucion con for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

//solucion con el metodo every :D
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


//reto, todos los del equipo deben ser menores a 15 años
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const equipoValidado = team.every(item => item.age <= 15);
console.log('El equipo cumple la condición: ' + equipoValidado);
