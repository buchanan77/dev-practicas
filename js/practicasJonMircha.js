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



//----------clases, metodos y propotipos----------

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

// let fecha = new Date();

// console.log(fecha.getFullYear());
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds())
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());

// let cumpleJoni = new Date(1994,11,15);
// console.log(cumpleJoni);

//---------------------------------------------


//---------- Objeto Math --------------------

// console.log(Math.ceil(7.2))
// console.log(Math.floor(7.8))
// console.log(Math.round(7.2))
// console.log(Math.round(7.6))
// console.log(Math.random())
// console.log(Math.round(Math.random()*100));

//------------------------------------------


//--------- Operador de Cortocircuito ---------------

// Cortocircuito || (OR)- cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto... quiere decir que si el valor que esta a la izquierda es true, se muestra lo de la izquierda, de ser false se muestra lo de la derecha

// console.log('cadena' || 'valor de la derecha');
// console.log(1 || 'valor de la derecha');
// console.log(-2 || 'valor de la derecha');
// console.log([] || 'valor de la derecha');
// console.log({} || 'valor de la derecha');
// console.log('' || 'valor de la derecha');
// console.log(false || 'valor de la derecha');
// console.log(null || 'valor de la derecha');
// console.log(undefined || 'valor de la derecha');



// // Cortocircuito && (AND)- cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto... quiere decir que si el valor que esta a la izquierda es false, se muestra lo de la izquierda, de ser true se muestra lo de la derecha... es lo contrario de OR

// console.log('' && 'valor de la derecha');
// console.log(false && 'valor de la derecha');
// console.log(null && 'valor de la derecha');
// console.log(undefined && 'valor de la derecha');
// console.log('cadena' && 'valor de la derecha');
// console.log(1 && 'valor de la derecha');
// console.log(-2 && 'valor de la derecha');
// console.log([] && 'valor de la derecha');
// console.log({} && 'valor de la derecha');


// // Un ejemplo con el operador cortocircuito || (OR)
// function nombreUsuario(nombre){
//     nombre = nombre || 'Usuario';
//     console.log(`Hola ${nombre}`);
// };


// nombreUsuario('Jonathan');
// nombreUsuario();



// // Un ejemplo con el operador cortocircuito && (AND)
// function nombrePersona(nombre){
//     nombre = nombre && 'Usuario';
//     console.log(`Hola ${nombre}`);
// };


// nombrePersona('')
// nombrePersona('Jonathan');
// nombrePersona();
// nombrePersona(false);


//-----------------------------------------------------------



//----Funcion Anomima Autoejecutable -----------------

// // para crear una funcion anonima ejecutable, debemos encerrar una funcion sin nombre dentro de parentesis (a esto se lo llama encapsulamiento), y luego debemos agregarle otros parentesis que son los que lo va a ejecutar como se ve en los ejemplos de abajo... dentro de los parentesis donde lo encapsulamos, creamos la funcion que vamos a querer crear.
// (function(){
//     console.log("Soy una funcion anonima autoejecutable")
// })();


// // En este ejemplo se puede ver como se crea una funcion anonima autoejecutable, y a este se le pasan parametros, los cuales despues definimos en los parentesis del exterior de la encapsulacion... en este ejemplo le dimos los parametros d, w y c, para que dentro de la funcion se pueda utilizar de atajo las letras (porque definimos los valores en los parentesis que lo ejecutan)... y en vez de escribir console.log, simplemente escribimos c.log y seria lo mismo.
// (function(d,w,c){
//     console.log(d);
//     console.log(w);
//     c.log("Dentro de una funcion anonima autoejecutable,puedo crear algunos atajos como lo son d de document, w de window y c de console.")
// })(document, window, console);



//------------------------------------------------------------


//------------- Asincronia -----------------------------------


// Callback
// Las callbacks como su nombre lo indica es una llamada de vuelta,lo que esto quiere decir es que al crear una funcion y agregarle una callback como parametro, es que nos devolvera una funcion con los otros parametros que le pasamos(si es que le pasamos otros parametros)...acontinuacion hay unos ejemplos realizados para poder comprender mejor las callbacks.


// function cuadradoCallback(value, callback){
//     setTimeout(()=>{
//         callback(value, value * value);
//     }, 2 | Math.random()*1000)
// }


// cuadradoCallback(5, (value, result)=>{
//     console.log(`Inicia Callback`);
//     console.log(`Callback ${value}, ${result}`);
// })




// function sayHello(name){
//     console.log(`Hola ${name} como estas hoy?`);
// }

// function userName(callback){
//     let name = prompt(`Por favor ingresa tu nombre`);
//     callback(name);
// };


// userName(sayHello);




// function matematicas(n1, n2, callback){
//     setTimeout(()=>{
//         callback(n1,n2);
//     }, 2000);
// };



// matematicas(25,5, (a,b)=>{
//     console.log(a + b);
// });

// matematicas(25,5, (a,b)=>{
//     console.log(a - b);
// });

// matematicas(25,5, (a,b)=>{
//     console.log(a * b);
// });

// matematicas(25,5, (a,b)=>{
//     console.log(a / b);
// });


//-----------------------------------------------------------


// Promise

// function cuadradoPromise(value){
//     if(typeof value !== 'number'){
//         return Promise.reject(`Error el valor ingresado '${value}' no es un numero`)
//     }

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 value,
//                 result: value * value
//             });
//         }, 2000);
//     });
// }

// cuadradoPromise(6)
//     .then((obj)=>{
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     })

//     .catch(err => console.error(err));




// Async Await

// async function funcionAsincronaDeclarada(){
//     try{
//         console.log('Inicio Async Function');
        
//         let obj = await cuadradoPromise(0);
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(1);
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(2);
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(3);
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise('4');
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(5);
//         console.log(`Promise: ${obj.value}, ${obj.result}`);

//         console.log('Fin Async Function');
//     }
//     catch(err){
//         console.error(err);
//     };
// }

// funcionAsincronaDeclarada();






//--------------- DOM --------------------------------

//-------------- attribute y dataset -----------------

// const $enlace = document.querySelector('#enlace');
// const $enlace2 = document.querySelector('#enlace2');


// $enlace.setAttribute('href', 'https://youtube.com');
// $enlace2.setAttribute('href', 'https:google.com.ar/');

// $enlace.setAttribute('target', '_blank');
// $enlace2.setAttribute('target', '_blank');
// $enlace.removeAttribute('class');
// console.log($enlace.hasAttribute('class'));
// console.log($enlace.getAttribute('id'));
// $enlace.setAttribute('class', 'link-dom');

// console.log($enlace.getAttribute('data-description'));
// console.log($enlace2.dataset.description);
// $enlace2.setAttribute('data-description', 'Acabo de modificar la descripcion del atributo data del $enlace2... Ahora esta descripcion te dice a donde te lleva el enlace, que es a la pagina principal de Google');
// console.log($enlace2.dataset.description);

// $enlace.dataset.description = 'Acabo de modificar la description del atributo data del $enlace... Ahora esta description te dice a donde te lleva el enlace, que es a la pagina principal de Youtube';
// console.log($enlace.dataset.description);




//--------------------- Estilos y variables en js ------------------------------------------
// console.log($enlace.style);
// console.log(getComputedStyle($enlace));


// const $html = document.documentElement,
// $body = document.body;

// let varSeconderyColor = getComputedStyle($html).getPropertyValue('--secondery-color');

// $body.style.background = varSeconderyColor;

// const $img = document.querySelector('.backpack-brown');

// $img.classList.toggle('ocultar');



//-------------------- texto y html -----------------------------------------

// const $ul = document.getElementById('paises');

// $ul.innerHTML = 
// `<li>Argentina</li>
// <li>Peru</li>
// <li>Uruguay</li>
// <li>Brasil</li>
// <li>Paraguay</li>
// <li>Bolivia</li>
// <li>Chile</li>
// `


//---------------- fragment -------------------------------------------------

// document.write("<h2>Nombres agregados dinamicamente utilizando Fragment</h2>")


// const $fragment = document.createDocumentFragment(),
// $listaNombres = document.createElement('ul'),
// nombres = ['Rocio','Emily','Phoebe','Ailen','Naomi','Lexie'];

// nombres.forEach(nombre =>{
//     const $li = document.createElement('li');
//     $li.textContent = nombre;
//     $fragment.appendChild($li)
// });

// $listaNombres.appendChild($fragment);
// document.body.appendChild($listaNombres);




//------------------- Eventos --------------------------------------

// const $btnAlert = document.querySelector('#mostrar-alert');

// function mostrarAlert(nombre){
//     alert(`Hola ${nombre}, bienvenido, este es un alert creado con una escucha a la cual le pasamos un parametro desde la funcion de afuera`);
// };

// const removerEvento = (e)=>{
//     alert(`Alert de tipo ${e.type}.`)
//     console.log(e);
//     $btnAlert.removeEventListener('dblclick', removerEvento);
//     $btnAlert.disabled = true;
// }


// $btnAlert.addEventListener('click', (e)=>{
//     alert('Soy un alert');
//     console.log(e.target);
// })

// $btnAlert.addEventListener('click', ()=>{
//     mostrarAlert('Jonathan');
// });

// $btnAlert.addEventListener('dblclick',removerEvento);



document.addEventListener('click', (e)=>{
    console.log('Diste click en ', e.target);

    if(e.target.matches('#primera-seccion #enlace')){
        console.log('Acabas de oprimir el enlace.');
    }
})