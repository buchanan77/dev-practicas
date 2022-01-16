
// const carritoCompra = []

// const producto = prompt('Bienvenido al supermercado, que producto deseas comprar?')

// carritoCompra.push(producto)

// while(confirm('Desea agregar otro producto ')){
//     const producto = prompt('Que producto desea agregar?')
//     carritoCompra.push(producto)
// }

// console.log('Usted compró:')

// // for(fruta of frutas{
// //     console.log(fruta)
// // })

// carritoCompra.forEach((producto)=>{
//     console.log(producto)
// }) 



// ------------Arrays-------------------

// const frutas = []

// const fruta = prompt('Que fruta desear agregar al 🛒?')

// frutas.push(fruta)

// while(confirm('Desea agregar mas frutas al 🛒?')){
//     const fruta = prompt('Que otra fruta deseas agregar al 🛒?')
//     frutas.push(fruta)
// }

// console.log('Estas son las frutas que agregaste al carrito:')

// frutas.forEach(fruta => console.log(fruta))


// ---------------Objetos------------------

// persona = {
//     nombre: 'Rocio',
//     pareja: 'Jonathan',
//     hijas: ['Emily', 'Phoebe'],
//     mejorAmiga: 'Milagros de Rodrigo'
// }


// -------------Destructuring---------------------

// let{nombre, pareja, hijas, mejorAmiga} = persona;

// console.log(nombre, pareja, hijas, mejorAmiga)



// ------Operador Rest y Spread Operator--------

//    ----------Operador Rest------------

// const sumar = (a, b, ...c) =>{
//     let resultado = a + b;
//     c.forEach(n =>{
//         resultado += n;
//     })

//     console.log(resultado)
// }

// sumar(5, 10, 20, 30, 40, 50);



// -----------Spread Operator-------------

// const nombres1 = ['Rocio', 'Jonathan'];
// const nombres2 = ['Emily', 'Phoebe'];

// console.log(nombres1, nombres2);


// const fusionNombres = [...nombres1, ...nombres2]

// console.log(fusionNombres)


