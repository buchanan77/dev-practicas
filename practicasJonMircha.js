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


// ----------objetos literales----------------

// const nombre = prompt('Cual es tu nombre?');
// const apellido = prompt('Cual es tu apellido?');
// const edad = parseInt(prompt('Cual es tu edad?'))


// const persona = {
//     nombre,
//     apellido,
//     edad
// }

// // console.log(persona)
// console.log(persona.nombre)
// console.log(persona.apellido)
// console.log(persona.edad)



//--------------clases, metodos y propotipos-------------

// // Los nombres de las clases siempre comienzan con mayusculas... importante no olvidarse eso
// class Animal{
// // El constructor es el encargado de la creacion de las propiedades de nuestro objeto, dentro de este se definen las propiedades que va a necesitar
//     constructor(nombre, edad, tipo){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.tipo = tipo;
//     }

//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.tipo}`)
//     }

// }

// const gato = new Animal('Garfield', 5, 'Gato');
// gato.saludar();

// const sapo = new Animal('Pepe', 5, 'sapo');
// sapo.saludar();


// // Se utiliza extends para decir que ese objeto va a heredar las propiedades de otro objeto, en este ejemplo el objero Perro va a heredar las propiedades del objeto Animal

// class Perro extends Animal{
//     constructor(nombre, edad, tipo, raza){
//     // Con super() lo que hacemos es decirle que propiedades va a heredar del objeto padre en este caso nombre, edad y tipo... quiere decir que llamanos al metodo constructor del objeto padre
//         super(nombre, edad, tipo);

//     // Aca creamos una nueva propiedad que no tiene el objeto padre
//         this.raza = raza;
//     }

// // Aca modificamos el metodo saludar, para adaptarlo al objeto Perro
//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre},  tengo ${this.edad} años, soy un ${this.tipo} y mi raza es ${this.raza}.`)
//     }
// }


// const firulai = new Perro('Firulai', 8, 'perro', 'Bulldog frances');

// firulai.saludar()







//---- Utilizando el metodo static---------

// class Animal{
//     constructor(nombre, edad, tipo){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.tipo = tipo;
//     }

//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.tipo}`)
//     }


// //-----------usando el metodo static--------------
// // Un metodo static se puede ejecutar sin instanciar la clase... esto quiere decir que no hace falta crear un nuevo objeto para poder utilizarlo

//     static ladrar(){
//         console.log('Guauuu Guauuu Guauuu Guauuu Guauuu')
//     }

// }

// // Ejemplo de como llamar a un metodo static
// Animal.ladrar()



// const gato = new Animal('Garfield', 5, 'Gato');
// gato.saludar();

// const sapo = new Animal('Pepe', 5, 'sapo');
// sapo.saludar();






// class Animal{
//     constructor(nombre, edad, raza){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.raza = null;
//     }


//     //----- Metodos -------------

//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.raza}`)
//     }


//  // Los setters y los getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

//     // El metodo get obtiene el valor de la propiedad que le pedimos... si aun no esta definida va a devolvernos undefined
//     get getRaza(){
//         return this.raza;
//     }

//     // El metodo set nos permite darle un valor a una propiedad o modificarla
//     set setRaza(raza){
//         this.raza = raza
//     }

//     // En muchos lenguajes a los getters y setters se los nombra con un get o set al principio del nombre ej: en vez de raza se lo nombra setRaza o getRaza

// }



// const perro = new Animal('Firulai', 5);
// perro.saludar();



// // Los metodos getters y setters no se llaman con () ej: Perro.getRaza() esto esta mal, estos son llamados como una propiedad mas del objeto ej: Perro.setRaza (esto es uno de los misterios de JavaScript)

// console.log(perro.getRaza);

// perro.setRaza = 'Bulldog Frances';

// console.log(perro.getRaza)



// perro.saludar();


//------------------------------------------------------



// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }



//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad} años.`)
//     }

// }

// const rocio = new Persona('Rocio', 24);

// rocio.saludar();




// class Superheroe extends Persona{
//     constructor(nombre, poderes, enemigos, calificacion){
//         super(nombre);
//         this.poderes = poderes;
//         this.enemigos = enemigos;
//         this.calificacion = null;
//     }

//     saludar(){
//         console.log(`Hola soy ${this.nombre}, mis poderes son ${this.poderes} y mis enemigos son ${this.enemigos}.`)
//     }

//     calificacionHeroe(){
//         console.log(`Soy ${this.nombre} y mi calificacion como heroe es de ${this.calificacion} puntos.`)
//     }



//     get getCalificacion(){
//         return this.calificacion;
//     }

//     set setCalificacion(calificacion){
//         this.calificacion = calificacion;
//     }

// }


// const batman = new Superheroe('Batman', 'baticosas', 'Wason y Acertijo')

// batman.saludar();

// console.log(batman.getCalificacion);

// batman.setCalificacion = 10;

// console.log(batman.getCalificacion);

// batman.calificacionHeroe();

//--------------------------------------------------


//------- Objeto Date ----------------------------

let fecha = new Date();

console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds())
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

let cumpleJoni = new Date(1994,11,15);
console.log(cumpleJoni);