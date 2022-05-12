//Funções -> Bloco de código a ser executado toda vez que eu invocar (chamar/executar)

//Palavra reservada chamada function

function calculaImc({nome, idade, peso, altura}){
    //todo nosso bloco de código da função
    console.log('Estou executando a minha primeira função');

    let imc = peso/altura ** 2;

    console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(2)}`)
}

//Chamada de função
calculaImc({nome:'José da Silva', idade: 28, pseo: 80.5, altura: 1.8});