// document.write("<h1> hola <h1>");
// console.log("Consola desde JS");
// // console.error("Esto es un error");

// // Variales
// /*  comentarios
// múltiples lineas*/
// // <---- tipo - tipado débil
// let x; 
// console.log(typeof(x));
// let esPW = false;
// console.log(typeof(esPW));
// if(esPW)
// {
//     console.log("Estamos en clase");
// }else{
//     console.log("No estamos en clase");
// }
// let numero = -2324.2324243;
// console.log(numero)

// let cadena = " Una cadena 'comillas'"
// console.log(cadena);

// let cadena2 ='otra cadena "al revés"'+ numero;
// console.log(cadena2);

// // interpolación de variables
// let cadena3 =`otra cadena 
// incluso puedo tener renglones 
// y variables ${numero}` ;
// console.log(cadena3);

// let id = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1);
// let usuario = {nombre:"Martin",[id1]: 123};
// console.log(usuario.nombre+" "+usuario[id1]);

// let variablenula = null;
// console.log(variablenula);

// const PI = 3.1416;
// console.log(PI);
// //PI = 1232;

// let arreglo = [];
// console.log(arreglo);
// arreglo = [1, 2, 3];
// console.log(arreglo);
// arreglo.push(4);
// console.log(arreglo);
// arreglo.pop();
// console.log(arreglo);
// arreglo.shift();
// console.log(arreglo);
// arreglo.unshift(10);
// console.log(arreglo);

// let objeto = {nombre:"Martin", edad: 47}
// console.log(Object.keys(objeto));
// console.log(Object.values(objeto));
// console.log(Object.entries(objeto));

// // alert("Alerta en pantalla");
// // let edad = prompt("Dame la edad", 0);
// // console.log(edad);

// let variable = "Valor";
// const CONSTANTE = "VALOR";
// function miFuncion(a = 2){ //valor por defecto
//     return 2*a;
// }
// console.log(miFuncion(4));
// const funcionFlecha = (a = 10) =>{
//     return 2*a;
// }
// console.log(funcionFlecha(7));

// //Destructuring - destructurar
// //Objetos
// const usuarios = {
//     nombre: 'Martin',
//     apellido: 'Nevarez'
// }
// // let nombre = usuarios.nombre;
// // let apellido = usuarios.apellido;
// const { nombre, apellido } = usuarios;
// console.log(nombre+" "+apellido);
// //Otro objeto
// const usuarios2 = {
//     nombre: 'Martin',
//     apellido: 'Nevarez',
//     redes:{
//             sociales:{
//                 twx: '@miusuario',
//                 face: '@miface'
//             }
//     }
// }
// // const face = usuarios2.redes.sociales.face;
// // const {twx,face} = usuarios2.redes.sociales;
// // console.log(twx+" "+face);
// const {redes:{sociales:{twx}}} = usuarios2;
// console.log(twx);

// //Arreglos
// const arregloNombres = ['Juan','Ernesto','Omar'];
// // let nombre1 = arregloNombres[0];
// // let nombre3 = arregloNombres[2];
// const [nombre1,,nombre3] = arregloNombres;
// console.log(nombre1+" "+nombre3);

// //Combinaciones
// //Objetos
// const usuarios3 = {
//     direccion: 'conocida',
//     numerocasa: '300'
// }
// //Propagación de campos
// const nuevoObjeto = {...usuarios2,...usuarios3};
// console.log(nuevoObjeto);

// //Arreglos
// const arregloApellidos = ['Perez', 'Lopez', 'Gomez'];
// const nuevoArreglo = [...arregloNombres,...arregloApellidos];
// console.log(nuevoArreglo);
// const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
// console.log(otroNuevoArreglo);

// //foreach, for, map, reduce <--- iterar arreglos
// for(let i=0; i<nuevoArreglo.length; i++){
//     console.log(nuevoArreglo[i]);
// }

// nuevoArreglo.forEach(function(nombre){
//     console.log(nombre);
// });

// let numeros = [1,2,3,4,5];
// let suma = 0;
// numeros.forEach(function(numero){
//     suma += numero;
// });
// console.log(suma);

// //Map
// let precios = [10,20,30,40,50];
// const conversion = 0.85;
// let preciosnuevos = precios.map(function(precio){
//     return precio * conversion;
// });

// console.log(preciosnuevos);

// //Reduce
// let SumaPrecios = precios.reduce(function(suma, precio){
//     return suma + precio;
// },0);
// console.log(SumaPrecios);

// //Clases
// class Animal{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     habla(){
//         console.log(`Este ${this.nombre} hace ruido`);
//     }
// }
// class Perro extends Animal{
//     habla(){
//         console.log(`Mi perro ${this.nombre} ladra`);
//     }
// }
// const perro = new Perro('Hunter');
// perro.habla();

//Clousures
const variablefuncion = function(){
    return "¡Hola!";
}

console.log(variablefuncion());

const saludo = "¡Hola";
function externa(){
    const persona = ' Martin ';
    function interna(){
        const fin = 'Nevarez!';
        return saludo+persona+fin;
    }
    return interna;
}
console.log(externa()());
const clousure = externa();
console.log(clousure());

//Otro ejemplo
const miContador = (function(){ // clase pero no es una clase
    let contador = 0;
    function incrementar(){
        return ++contador;
    }
    function decrementar(){
        return --contador;
    }
    function valor(){
        return contador;
    }
    return{
        incrementar,
        decrementar,
        valor
    }
})() //<--- ejecutar la funcion principal
console.log(miContador);
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());


// Promesas
// Páginas Dinámicas <--- acceso a datos (internos, externos)
// kb <----------externas, internas--------->MB o GB
let datos = [
    {
        id: 1,
        materia:'PW',
        semestre: 6
    },
    {
        id: 2,
        materia:'POO',
        semestre: 1
    },
    {
        id: 3,
        materia:'Estructura de datos',
        semestre: 2
    }
];

// datos = [];
// console.log(datos);
// función que simula obtener datos de un servidor remoto
const obtenerDatos = () => {
    return new Promise((resolve,reject) => {
        if(datos.length ===0){
            reject(new Error("Datos está vacío"));
        }
        setTimeout(() => {
            resolve(datos);
        },1500); //milisegundos
    })
}

//Función asynce debe esperar a que termine de obtener la informacion
async function procesarDatos(){
    try {
        const misdatos = await obtenerDatos();
        console.log(misdatos);
    } catch (err) {
        console.log(err.message);
    }
}
console.log(procesarDatos());
// console.log(obtenerDatos());