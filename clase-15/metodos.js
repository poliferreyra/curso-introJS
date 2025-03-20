// METODOS BASICOS DE ARRAY

// push() (Agrega un elemento al final del array)
let apellidos = ["Gonzalez", "Diaz"];
apellidos.push("Perez");
console.log(apellidos); // ["Gonzalez", "Diaz", "Perez"]

let num = [1, 2, 3];
num.push(4);
console.log(num); // [1, 2, 3, 4]

// pop() (Elimina el último elemento del array)
let colores = ["Rojo", "Verde", "Azul"];
colores.pop();
console.log(colores); // ["Rojo", "Verde"]

let abc = ["a", "b", "c"];
console.log(abc); // ["a", "b", "c"]

// Devuelve el dato del elemento que se estaria eliminado del array (en este caso el ultimo elemento)
let ultimaLetra = abc.pop(); // A la variable se le asigna el valor que corresponda a abc.pop()
console.log(ultimaLetra); // c

// shift() (Elimina el primer elemento del array)
let animales = ["Perro", "Gato", "Conejo"];
animales.shift();
console.log(animales); // ["Gato", "Conejo"]

// Devuelve el dato del elemento eliminado del array (en este caso el primer elemento)
let primerAnimal = animales.shift(); // A la variable se le asigna el valor que corresponda a animales.shift()
console.log(primerAnimal); // "Gato"  Porque Gato y no Perro❓ Se los dejo para pensar 🤔

let otrosNum = [10, 20, 30];
otrosNum.shift();
console.log(otrosNum); // [20, 30]

// unshift() (Agrega un elemento al inicio del array)
let dias = ["Martes", "Miércoles"];
dias.unshift("Lunes");
console.log(dias); // ["Lunes", "Martes", "Miércoles"]

let masNum = [2, 3, 4];
masNum.unshift(5);
console.log(masNum); // [5, 2, 3, 4]

//join() (Convierte un array en un string)
let palabras = ["Hola", "Mundo"];
let oracion = palabras.join(" ");
console.log(oracion); // "Hola Mundo"

let otrosNumeros = [1, 2, 3];
console.log(otrosNumeros.join("-")); // "1,2,3" ❗si bien parecen igual - el tipo de dato es distinto

// indexOf() (Busca la posición de un elemento)
let nombres = ["Ana", "Carlos", "Pedro"];
console.log(nombres.indexOf("Carlos")); // 1

// No encuentra el parametro entonces devuelve -1
let frutas = ["Manzana", "Pera", "Uva"];
console.log(frutas.indexOf("Banana")); // -1

// lastIndexOf() (Última aparición de un elemento)
// si el parametro de busqueda esta repetido, buscando de atras hacia adelante y me va a devolver la posicion del primero que encuentre
// Este método es útil cuando necesitas encontrar la última aparición de un elemento en un array.
// Por ejemplo, en un sistema de logs, encontrar la última vez que ocurrió un evento específico.
let logs = ["gmail1", "gmail2", "gmail3", "gmail1", "gmail4"];
console.log(logs.lastIndexOf("gmail1")); // 3

let letras = ["a", "b", "a", "c"];
console.log(letras.lastIndexOf("a")); // 2

// includes() (Verifica si un elemento está en el array)
// En este caso en lugar de mostrar la posicion (como el indexOf()) lo que devuelve es un booleano
let paises = ["Argentina", "Brasil", "Chile"];
console.log(paises.includes("Brasil")); // true

let numeros = [5, 10, 15];
console.log(numeros.includes(20)); // false

// PROPIEDADES DE STRING
// Son características del string que nos dan información sobre él.

// length (Devuelve la cantidad de caracteres) / la longitud que tenga la palabra o la cadena de texto
let palabra = "Hola";
console.log(palabra.length); // 4

let cantidadLetras = "Hola Javascript";
console.log(cantidadLetras.length); // 15

// indexOf() (Encuentra la posición de un caracter o palabra)
let posicion = "Hola Mundo";
console.log(posicion.indexOf("Mundo")); // 5

let posicionPalabra = "Programar es divertido";
console.log(posicionPalabra.indexOf("divertido")); // 13

// METODOS DE STRING
// Son funciones asociadas a los strings que nos permiten manipularlos.

// slice() (Extrae o corta una parte de un string)
// Primer parametro: recibe el indice desde donde inicia
// Segundo parametro: recibe el indice donde tiene que hacer el corte - 
let saludo = "Hola Mundo";
console.log(saludo.slice(0, 4)); // "Hola"

// Si le pongo un solo parametro - toma el indice donde inicia y devuelve todo lo restante
let parteDe = "Javascript es genial";
console.log(parteDe.slice(11)); // "es genial"

// que pasa si el parametro es negativo❓
let serie = "Greys Anatomy";
console.log("si es negativo el parametro" + " " + serie.slice(-5)); // ??? Se los dejo para chequear😉

// trim() (Elimina espacios en blanco al inicio y al final)
let sinEspacios = "  Hola  ";
console.log(sinEspacios.trim()); // "Hola"

let mensaje = "  Bienvenido ";
console.log(mensaje.trim()); // "Bienvenido"

// replace() (Reemplaza un texto dentro del string)
let reemplazo = "Me gusta el café";
console.log(reemplazo.replace("café", "té")); // "Me gusta el té"

let texto = "Hola Juan";
console.log(texto.replace("an", "lieta")); // "Hola Julieta"

// split() (Divide un string en un array)
// Va a buscar lo que le hayamos puesto como parametro
// y cada vez que lo encuentre, lo que hay previo, lo devuelve como un elemento del array
let lista = "manzana,pera,banana";
console.log(lista.split(",")); // ["manzana", "pera", "banana"]

let frase = "Hola mundo, cómo estás";
console.log(frase.split(" ")); // ["Hola", "mundo,", "cómo", "estás"]

let pruebaSplit = "123-657-10234-234456";
console.log(pruebaSplit.split("4"));
