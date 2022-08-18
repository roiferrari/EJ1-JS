//objetos
//es una coleccion de datos relacionados que consta de variables y funciones , denominadas propiedades y metodos cuando esten dentro de objetos
// CONSTRUCTOR : es una funcion que recibe los parametros que queremos  por ej constructor(tamaño, ingredientes)



// class Pizza {
//     constructor (tamaño, tipoDeMasa, sabor, aceitunas) {
//         this. tamaño = tamaño;
//         this.tipoDeMasa = tipoDeMasa;
//         this.sabor = sabor;
//         this.aeitunas = aceitunas



//     }
// }

// let miPizza = new Pizza ('grande', 'integral', 'napolitana', true);

// console.log (miPizza);

// class Auto {
//     constructor (marca,modelo,año){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     arrancar = function (){
//         return 'el auto arranco'
//     };
//     getMarca = function (nuevaMarca) {
//         return this.marca = nuevaMarca
//     }

// }

// difeencias entre class y objetos 
// instancia de objetos tipo objeto
//la class es una plantilla predefinida , para crear mi instancia de objeto, el constructor agarra parametros 
// y crea un 



// const pizzas = {
//     id: '0',
//     nombre: 'grande de muzarella',
//     ingredientes: ['oregano', 'doble queso'],
//     precio: '1000',

// }

//👉 Debemos crear 6 objetos como mínimo.

class Pizza {
    constructor(id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const pizzas = [
    new Pizza (0, 'Grande de Muzza', ['oregano', 'doble queso'], '500'),
    new Pizza (1, 'Calabresa', ['longaniza', 'salsa especial'], '1500'),
    new Pizza (2, 'cuatro quesos', ['roquefort', 'parmesano' ,'sardo'], '1800'),
    new Pizza (3, 'Fugazzeta', ['oregano', 'doble queso', 'jamon'], '1200'),
    new Pizza (4, 'Newyoquina', ['extraqueso', 'peperoni'], '2000'),
    new Pizza (5, 'Napolitana', ['oregano', 'tomate', 'salsa napo'], '1900'),

]



//c) El nombre de cada pizza con su respectivo precio.  

pizzas.forEach((e) => console.log(`la pizza ${e.nombre} tiene un precio de $${e.precio}`))


// function tipoDePizzas () {  
//     for (let i = 0 ; i <pizzas.length; i++){
//         console.log ( `la pizza "${pizzas[i].nombre}" tiene unn precio de "$${pizzas[i].precio}"` 
//         );

//     }
// }

// tipoDePizzas()




//d) Todos los ingredientes de cada pizza 



function ingredientes () {

    for (let i = 0 ; i <pizzas.length; i++){
        console.log ( `la pizza "${pizzas[i].nombre}" tiene los ingredientes "${pizzas[i].ingredientes}"` 
        );

    }

}

ingredientes()




// function pizzaMasBarata () {
//     for (i = 0 ; i <pizzas.length ; i++) {

//         if (pizzas[i].precio<600){
//             console.log (`la pizza  "${pizzas[i].nombre}" es la mas barata, sale "$${pizzas[i].precio}`)
//         }
//     }


// }
// pizzaMasBarata()


//b) ¿Hay alguna pizza que valga menos de $600?

const pizzaMasBarataQue600 = pizzas.some ((e) => e.precio <600);
console.log(`hay pizza mas barata que $600?`,pizzaMasBarataQue600)





//a) Las pizzas que tengan un id impar.

pizzas.forEach ( (pizzas) => {
     if (pizzas.id % 2 !== 0) {
        console.log(`la ${pizzas.nombre} tienen el numero ${pizzas.id}, y es impar`)
     }
})





//impares EJemplos
    

// const idImpar = pizzas.filter((piza) => pizza.ID % 2 != 0)

// console.log(`Las pizzas con ID impar son:`)
// for (piza of idImpar) {
//     console.log(`${pizza.nombre}`)
// }



// const pizzasImpares = pizzas.filter( (e) => {
//     return e.id %2 != 0 
// });

// console.log(pizzasImpares);









