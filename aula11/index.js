
let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

//------------------------------- 1 -------------------------------
////e nos pediram para passar todos os elementos para letras maiúsculas, 
//o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.

function converterMaiusculasLoop(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(`

------------------------------- Exercício 1 -------------------------------

`);
console.log(converterMaiusculasLoop(filmes));

console.log(`

-------------------------------------//------------------------------------

`);

//------------------------------- 2 -------------------------------
//Agora precisamos modificar a função de passagem de elemento() 
//que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.

let filmesAnimados = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function removerUltimoElemento(array){
    return array.pop();
}

let ultimoElemento = removerUltimoElemento(filmesAnimados);

console.log(`
-----------------------> Último elemento: ${ultimoElemento} <-----------------------
`)

// function pasajeDeElementos(array1, array2) { 
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase()) 
//     array1.push(array2.pop().toUpperCase()) 
//     return array1
// }

// function passagemDeElementos(array1, array2){
//     for(let i = 0; i < array2.length; i++){
//         array1.push(array2.pop().toUpperCase())
//     }
//     return array1
// }

function passagemDeElementos(array1, array2){
    for(const element of array2){
        array1.push(array2.pop().toUpperCase())
    }
    return array1
}
console.log(`

------------------------------- Exercício 2 -------------------------------

`);

//console.log(pasajeDeElementos(filmes, filmesAnimados));
console.log(passagemDeElementos(filmes, filmesAnimados))

console.log(`

-------------------------------------//------------------------------------

`);


//------------------------------- 3 -------------------------------
// Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, 
// lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar
// em outra variável antes de fazer a passagem de elementos de um array para outro!


