const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

//ejemplo de array con objetos
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

//reto, contar cuantas veces se repiten los numeros
// pero ahora por grupos: 1-5, 6-8 y 9-10
const numeros = [1,2,2,3,4,5,6,7,8,7,8,9,10];

const rta2 = numeros
.reduce((obj, item) => {
    if (item > 0 && item <= 5) {
        obj["1-5"] += 1;
    }else if (item > 5 && item <= 8) {
        obj["6-8"] += 1;
    }else{
        obj["9-10"] += 1;
    }
    return obj;
},
{"1-5":0, "6-8":0, "9-10":0,});
console.log(rta2);

