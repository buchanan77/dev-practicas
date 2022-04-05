// const btn = document.querySelector("#btn");

// const user = {};

// let textPrimary = document.querySelector("#textPrimary")

// user.name = `Jonathan`;
// user.lastName = `Buchanan`;
// user.age = 15;
// user.hobbies = [`Correr`, `Dormir`, `Coleccionar`, Programar = {lenguaje : `JavaScript`, Nivel : `Principiante`, Actualmente : `Practicando con objetos`}];


// btn.addEventListener("click", () => {
//     btn.textContent = "Ocultar";
//     textPrimary.textContent = `Hola ${user.name}, como estas?... espero que bien... es hora de que empieces a practicar ${user.hobbies[3].lenguaje}`;
// })




// console.log(user.name);
// console.log(user.lastName);
// console.log(user.hobbies[1]);
// console.log(user.hobbies[3]);


//***************************************************************************************************************************************************************************************** */


const grandeLibrosDeAventura = ["La isla del tesoro", "Robinson Crusoe", "La vuelta al mundo en 80 días", "Las aventuras de Tom Sawyer", "Los tigres de Mompracem", "Colmillo blanco", "Los Tres Mosqueteros vol. I", "Los Tres Mosqueteros vol. II", "El último de los mohicanos", "Ivanhoe", "La flecha negra", "Las minas del Rey Salomón", "El libro de la selva", "Los viajes de Gulliver", "Veinte mil leguas de viaje submarino", "Las aventuras de Huckleberry Finn", "La llamada de lo salvaje", "Historia de dos ciudades", "El príncipe y el mendigo", "La última batalla (Sandokán)", "El extraño caso del Dr. Jekyll y Mr. Hyde", "Capitanes intrépidos", "Miguel Strogoff", "El prisionero de Zenda", "Las aventuras del Barón de Münchausen", "Un yanqui en la corte del Rey Arturo", "El tesoro del lago de la Plata", "De la Tierra a la Luna", "El corsario negro", "Kim", "Viaje al centro de la tierra", "El tulipán negro", "Las aventuras de Oliver Twist", "La venganza de Sandokán", "El Fantasma de la Ópera", "El lobo de mar", "Cinco semanas en globo", "Traición en Oriente", "Las alegres aventuras de Robin Hood", "El fantasma de Canterville y otros relatos", "Drácula", "La quimera del oro", "Primer viaje alrededor del globo", "El escarabajo de oro y otros relatos", "El sabueso de los Baskerville", "Los piratas del mar Rojo", "Tom Sawyer detective", "Las aventuras prodigiosas de Tartarin de Tarascon", "Frankenstein", "El talismán", "El señor de Balantry", "El León de Damasco", "El faro del fin del mundo", "Estudio en escarlata", "La cabaña del tío Tom", "Quo vadis?", "Secuestrado", "El mundo perdido", "El conde de Montecristo (vol.I)", "El conde de Montecristo (vol.II)"];



// aqui utilice el metodo find para buscar el nombre de un libro en especifico

// const encontrarLibro = grandeLibrosDeAventura.find(libro => libro === "El libro de la selva");

// console.log(encontrarLibro);



// *******************************************************************************************************************************************************************************************





// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// const filterItems = query => {

//   return fruits.filter((el) =>
  
//     el.toLowerCase().indexOf(query.toLowerCase()) > -1
//   );
// }

// console.log(filterItems('ap'));
// console.log(filterItems('nan'));






// const frutas = ['manzana', 'banana', 'uva', 'mango', 'naranja', 'mandarina', 'tomate', 'ciruela'];

// const filtrarContenido = (consulta) => { return frutas.filter((el) => el.toLowerCase().indexOf(consulta.toLowerCase()) > -1
//   );
// }

// console.log(filtrarContenido('toma'));
// console.log(filtrarContenido('man'));
// console.log(filtrarContenido('cir'));




// function actualizacionVegetales (verduras, verdura) {
//   if (verduras.indexOf(verdura) === -1) {
//       verduras.push(verdura);
//       console.log('La nueva colección de vegetales es: ' + verduras);
//   } else if (verduras.indexOf(verdura) > -1) {
//       console.log(verdura + ' ya existe en la colección de verduras.');
//   }
// }

// var verduras = ['patata', 'tomate', 'chiles', 'pimientoverde'];

// actualizacionVegetales(verduras, 'espinaca');
// // La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
// actualizacionVegetales(verduras, 'espinaca');
// // La espinaca ya existe en la colección de verduras.
// actualizacionVegetales(verduras, 'zanahoria')






// const comidas = ["arroz con tuco", "milanesas de pollo", "tarta de jamon y queso", "pizzas", "guiso", "fideos con tuco", "panchos", "hamburguesas", "marinera de higado", "milanesas de carne", "vitina", "milanesas a la napolitana", "canelones", "fiambre", "fideos con manteca", "torrejas de acelga"]





// desde aca hice modificaciones al archivo cards2.html

// let btn = document.querySelector(".btn");
// let cartelNew = document.querySelector(".new");
// const stock = [
//     {
//         nombre: "mochila marron",
//         cantidad: 10
//     }
// ]


// let comprar = btn.addEventListener("click", ()=> {
//     if(btn){
//         stock[0].cantidad --;
//         if(stock[0].cantidad === 0){
//             btn.style.backgroundColor = "#555555";
//             cartelNew.style.backgroundColor = "#555555";
//             cartelNew.textContent = "Sin stock";
//             btn.disabled = true;
//         }
//     }
//     console.log("Acabas de comprar este producto");
//     console.log(stock[0].cantidad)

// })

// aca finalizaron las modificaciones del archivo cards2.html



const frutas = ['manzana', 'naranja', 'uva', 'mandarina', 'ciruela', 'tomate', 'pera', 'kiwi', 'ana', 'durazno', 'damasco', 'granada'];

// for(let fruta of frutas){
//     console.log(fruta)
// }


const comidas = ["arroz con tuco", "milanesas de pollo", "tarta de jamon y queso", "pizzas", "guiso", "fideos con tuco", "panchos", "hamburguesas", "marinera de higado", "milanesas de carne", "vitina", "milanesas a la napolitana", "canelones", "fiambre", "fideos con manteca", "torrejas de acelga"]

for(let comida of comidas){
    console.log(comida)
}

