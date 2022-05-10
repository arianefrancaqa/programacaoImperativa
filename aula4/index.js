//NodeJS -> Interpretador de código Javascript
// VSCode -> Editor de texto oficial.

console.log("Hello World!")

console.log("Teste")

//Declarando uma variável
let nome;

//Fazendo atribuição à variável
// = -> atribuição
var sobrenome = 'Ciclano';
var c;

/* 
    const

    Sempre temos que inicializar o const com algum valor;
    uma vez que o valor foi definido, o mesmo não pode ser alterado
*/
//1 segundo =  1000 milisegundos
const segundo =  1000;
const minuto = 60 * segundo;
const hora = 60 * minuto;
const cpf = '000.000.000-00'


/*
    let, var

    uma vez que definido, seu valor pode ser alterado
*/

let numero = 5;
numero = 10;

//Ho-isting
var x = 8;
x = 12;

//Ctrl + D -> Seleciona todas as referências e as altera
const soma = 5 + 8;
const subtrair = 3 - 2;
const multiplicar = 4*2;
const divisao = 5 / 2;
const divisaoModular = 5 % 2; // 1
const exponenciassao = 2 ** 4// 2 * 2 * 2 * 2
const raizQuadrada = 4 ** 0.5; //hack raiz quadrada
const raizQuadradaMath = Math.sqrt(4);
const pow = Math.pow(2,4); // Exponenciassão usando Math

// Variável ->
// let, var, const