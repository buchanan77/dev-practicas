// Ejercicios del curso de JS Jon Mircha

// Ejercicio 1 
// Consigna: Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// const contadorLetras = (texto = '') => (!texto) 
// ? console.warn('No ingresaste ningun texto') 
// : console.log(`La cadena que ingresaste tiene ${texto.length} caracteres.`)

//   contadorLetras('Hola mundooooo');
//   contadorLetras()

//-------------------------------------------------------



// Ejercicio 2
// Consigna: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


// const recortarTexto = (texto = '', longitud = undefined) => (!texto) 
//   ? console.warn('No ingresaste ningun texto')
//   :(longitud === undefined) 
//     ? console.warn('No ingresaste la longitud para recortar el texto.')
//     : console.log(texto.slice('Hola mundo', longitud))


// recortarTexto('hola mundo', 4);
// recortarTexto();
// recortarTexto('hola mundo', );
// recortarTexto("", 4);

//---------------------------------------------------------


// Ejercicio 3
// Consigna:  Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


// const separarLetras = (texto = '', separador = undefined)=>(!texto) 
//   ? console.warn('No ingresaste ningun texto')
//   :(separador === undefined) 
//     ? console.warn('No ingresaste ningun separador')
//     : console.log(texto.split(separador))


// separarLetras('Hola a todos, quiero agradecerles por haber venido', ' ' )


//--------------------------------------------------------


// Ejercicio 4
// Consigna: Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// const repetirTexto = (texto = '', repetir = undefined) => {

//   if(!texto) return console.warn('No ingresaste ningun texto');

//   if(repetir === undefined) return console.warn('No ingresaste el numero de veces a repetir el numero');

//   if(repetir === 0) return console.error('El numero de veces no puede ser 0');

//   if(Math.sign(repetir)) return console.error('El numero de veces no puede ser negativo');

//   for(let i = 1; i <= repetir; i++){
//     console.log(`${texto}, ${i}`)
//   }

// }

// repetirTexto('Hola mundo', 3);
// repetirTexto('Hola mundo', 0);
// repetirTexto('Hola mundo', -20);
// repetirTexto('', 20);
// repetirTexto('Hola mundo'); 


//-------------------------------------------------------


// Ejecicio 5
// Consigna: Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const invertirTexto = (texto = '') => (!texto) 
//   ? console.warn('No ingresaste ningun texto')
//   : console.log(texto.split('').reverse().join(''));

// invertirTexto('Hola Mundo');


//---------------------------------------------------------


// Ejercicio 6
// Consigna: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


// const filtrarPalabras = (texto = '', encontrar = '') => {

//   if(!texto) return console.warn('No ingresaste ningun texto largo');

//   if(!encontrar) return console.warn('No ingresaste ningun texto para evaluar');

//   let i = 0;
//   let contador = 0;

//   while(i !== -1){
//     i = texto.indexOf(encontrar, i);
//     if(i !== -1){
//       i++;
//       contador++;
//     }
//   }


//   return console.info(`La palabra ${encontrar} se repite ${contador} veces en el texto`)

// }


// filtrarPalabras('hola mundo, este mundo, da mundo, mundo, da mundo', 'mundo');
// filtrarPalabras('hola mundo, este mundo, da mundo, mundo, da mundo', 'da');


// --------------------------------------------------------



// Ejercicio  7
// Consigna: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const palindromo = (texto = "") => {
//   if(!texto) return console.warn('No ingresaste ninguna palabra');

//   let palabra = texto.toLowerCase();
//   let alReves = palabra.split('').reverse().join('');

//   return (palabra === alReves)
//   ?console.info(`Si es palindromo, la palabra Original ${palabra}, palabra al reves ${alReves}.`)
//   :console.info(`No es palindromo, la palabra Original ${palabra}, palabra al reves ${alReves}.`);
// }



// palindromo('Salas');
// palindromo('Pera');
// palindromo('');


// ----------------------------------------------------------


// Ejercicio 8
// Consigna: Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// const eliminarCaracteres = (texto = '', patron = '') => 
// (!texto)
//   ? console.warn('No ingresaste ningun texto largo')
//   :(!patron)
//     ? console.warn('No ingresaste un patron de caracteres')
//     : console.info(texto.replace(new RegExp(patron, 'ig'), ''));


//   eliminarCaracteres();
//   eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5');
//   eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');

  // ---------------------------------------------------------


// Ejercicio 9
// Consigna: Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const numeroAleatorio = (min, max) => {
//   if(min && max){
//     let numero = Math.round(Math.random() * (max - min)) + min;
//     console.log(numero);
//   }else{
//     console.warn('No ingresaste uno de los numeros')
// }
// }

// numeroAleatorio(501, 600);
// numeroAleatorio(1,100)


// ----------------------------------------------------------


// Ejercicio 10
// Consigna: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// const capicua = (numero = 0) => {
//   if(!numero) return console.warn('No ingresaste ningun numero');

//   if(typeof numero !== 'number') return console.warn(`El valor "${numero}" ingresado, NO es un numero.`);


//   numero = numero.toString();
//   let alReves = numero.split("").reverse().join("");

//   return (numero === alReves)
//     ? console.log(`Si es capicua, Numero original ${numero}, y numero alreves ${alReves}.`)
//     : console.log(`No es capicua, Numero original ${numero}, y numero alreves ${alReves}.`)

// }

// capicua(2002);
// capicua('');
// capicua('2002');


// ------------------------------------------------------------


// Ejercicio 11
// Consigna: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if(numero === undefined) return console.warn('No ingresaste ningun numero');

  if(typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un numero.`);

  if(numero === 0) return console.error('El numero NO puede ser 0');

  if(Math.sign(numero) === -1) return console.error(`El numero no puede ser negativo.`);

  let factorial = 1;

  for(let i = numero; i > 1; i--){
    factorial *= i;
  };

  return console.info(`El factorial de ${numero} es ${factorial}.`)

}


factorial();
factorial('5');
factorial([1,2,3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);


// ----------------------------------------------------------

// Ejercicio 12
// Consingna: Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

