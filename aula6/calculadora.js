var readlineSync = require("readline-sync");

//Adição
function adicao(num1, num2) {
    return num1 + num2;
}

//Subtração
function subtracao(num1, num2) {
    return num1 - num2;
}

//Multiplicação
function multiplicacao(num1 = 0, num2 = 0) {
    return num1 * num2;
}

//Divisão
function divisao(num1, num2) {
    return num1 / num2;
}

//Numero ao quadrado
function quadradoDoNumero(num1) {
    return multiplicacao(num1, num1);
}

//Calcula porcentagem
function calculaPorcentagem(num1, num2) {
    return num1 * (num2 / 100);
}

console.log("-------------- Teste de Operações / Calculadora --------------");

let num1 = readlineSync.question("Qual o primeiro numero?");
let num2 = readlineSync.question("Qual o segundo numero?");
let operacao = readlineSync.question(`Qual eh a operacao?
Para adicao digite 1;
Para subtracao digite 2;
Para multiplicacao digite 3;
Para divisao digite 4;
Para divisao por 0 digite 5;
Para saber raiz quadrada digite 6;
Para saber uma porcentagem digite 7;

`);


switch (operacao) {
    case "1":
        console.log(`
            O resultado da adição ${num1} com ${num2} é ${adicao(num1, num2)}
        `);
        break;

    case "2":
        console.log(`
            O resultado da subtração ${num1} com ${num2} é ${subtracao(num1, num2)}
        `);
        break;

    case "3":
        console.log(`
            O resultado da multiplicação ${num1} com ${num2} é ${multiplicacao(num1, num2)}
        `);
        break;

    case "4":
        console.log(`
            O resultado da divisão ${num1} com ${num2} é ${divisao(num1, num2)}
        `);
        break;

    case "5":
        console.log(`
            O resultado da divisão de ${num2} por 0 é ${divisao(0, num2)}
        `);
        break;

    case "6":
        console.log(`
            O resultado do quadrado de ${num1} com ${num2} é ${quadradoDoNumero(num1)}
        `);
        break;

    case "7":
        console.log(`
            ${num2}% de ${num1} é ${calculaPorcentagem(num1, num2)}
        `);
        break;

    default:
        console.log("Erro operação não reconhecida.");
}
