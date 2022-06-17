const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];
//aplanando un array de objetos
//podemos usar el metodo map seguido de flat para lograr esto
const rta = users.map(user => user.attributes).flat();
console.log('map y flat', rta);

//usando el metodo flatMap :D, junta lo mejor de map y flat
const rta2 = users.flatMap(user => user.attributes);
console.log('flatMap', rta2);

//reto aplanado un objeto con arrays dentro
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

//solucion de la clase
//1ro se convierte el objeto a array con Object.values
//2do se mapea y aplana con flat usando flatMap
//3ro se mapea el item buscando unicamente date.starDate
const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log('flatMap', rta3);

//El calendario lo convierto de objeto a array.
//lo aplano un nivel para quitar la división de
//primary y secondary y luego le mapeo el startDate 
const rta4 = Object.values(calendars).flat().flatMap(cal => cal.startDate);
console.log('flatMap', rta4);