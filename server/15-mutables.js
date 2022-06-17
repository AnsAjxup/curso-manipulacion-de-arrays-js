const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//eliminamos 🍔 del array products y lo agregamos al array myProducts
//obtenemos el index del elemento
const productIndex = products.findIndex(item => item.id === '🍔');
//findIndex devuelve 1 si lo encontro y -1 si no
//hacemos la validacion y si se encontro se ejecuta
if (productIndex !== -1) {
    //primero insertamos el producto en el array myProduct  
    myProducts.push(products[productIndex]);
    //eliminamos el elemento del array products
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//reto, eliminar un elemento del array sin eliminar el elemento del array original
const products2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const id = products2.find(item => item.id === '🍔');
console.log(id.id);
const myProduct2 = products2.filter(busqueda => busqueda.id != id.id);
console.log("products", products2);
console.log("myProducts", myProduct2);
console.log("-".repeat(10));



// Update en un array
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
//obtenemos el index del elemento a actualizar
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
//nos ubicamos en el index del elemento
//realizamos la actualizacion
//se vuelven a pegar los datos que ya existian y luego se
//agregan los nuevos del array update
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);

//reto: como modificar un array sin modificar el array original
const productsV3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update2 = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV3 = productsV3.findIndex(item => item.id === update2.id);

const updateArray = productsV3.map(item => {
    if (item.id === update2.id){
        return {
            ...item,
            ...update2.changes,
        };
    } else {
        return {
            ...item,
        }
    }
});
console.log(productsV3);
console.log(updateArray);