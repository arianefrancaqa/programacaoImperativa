// Seguindo o que vimos na aula como exemplo, procure um módulo na internet que seja do seu interesse.
// Depois de encontrá-lo, em uma nova pasta de trabalho, crie um arquivo.js e instale o módulo correspondente como 
//vimos na aula (eles geralmente são instalados por npm install *NOME DO MÓDULO*, mas é uma boa prática sempre ler a 
//própria documentação dos módulos que vamos usar).
// Continuando com a boa prática de leitura da documentação, solicite o módulo selecionado conforme ele indica para você.
// Verifique se funciona corretamente com alguns exemplos (nunca pararemos de insistir para que você leia a documentação).


var readlineSync = require('readline-sync');

var nome = readlineSync.question('Qual eh o seu nome? ');
var turma = readlineSync.question('Qual eh o numero da tua turma na DH? ');
var cadeira = readlineSync.question('Qual eh a cadeira deste trabalho? ');

console.log(`
    Seu nome eh ${nome}, 
    da turma ${turma},
    e esta eh a cadeira de ${cadeira}
`);