//Strings -> Cadeia de caracteres ou uma sequencia ou uma sequencia de caracteres
//Uma string pode ser considerada um objeto ou assume algumas propriedade dos objetos
/**
 * Propriedades -> Algumas caracteristicas referentes a string de fato
 * lenght -> tamanho -> Descrece a quantidade de caracteres dentro de uma string
 * 
 * Métodos -> Funções que vão representar comportamentos e ações dentro do nosso objeto
 * 
 */

let senha = "1234";
if(senha.length < 4){
    console.log("Por favor, preencha uma senha com mais de 4 caracteres")
}else{
    console.log("Senha válida")
}

let texto = "Minha string"
console.log(texto.toUpperCase());

//includes() -> Verifica se o texto especificado entre parenteses existe na string
let email = "teste@mail.com"
if(email.includes("@") && email.includes(".com")){
    console.log("Email válido");
} else{
    console.log("É email inválido");
}


let test =  ["khsdbakhjsd","akjdba0","ksdbas"];
console.log(test.toUpperCase())
