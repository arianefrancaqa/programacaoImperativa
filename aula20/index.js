/*
  Módulos Nativos do Node.JS 
  Módulos Externos de outras pessoas
  Nossos Módulos
*/

/*
  Possibilidade de reutilizar os códigos
  Centralizar a lógica dos nossos códigos
  Facilidade de alteração
  Uma vez alterado no arquivo principal, as mudanças são nos demais arquivos o qual o módulo foi importado 
*/

//Módulos Externos de outras pessoas
//let readlineSync = require("readline-sync");
// let nome = readlineSync.question('Qual o seu nome?');

// Módulos Nativos do Node.JS

let fs = require("fs");
// Sync ->
// Async
// console.log('Processando Primeiro arquivo');
//fs.writeFileSync("programming.txt", 'Criando um arquivo sincrono');
// console.log('Processou Primeiro arquivo');

const data = fs.readFileSync("./data.xlsx - data.csv", {
  encoding: "utf-8",
});
//titular,numero,tipo,saldo
let linhas = data.split("\r\n");
let html = `<table>`;
for (let i in linhas) {
  const linha = linhas[i];
  let dados = linha.split(",");
  const titular = dados[0];
  const numero = dados[1];
  const tipo = dados[2];
  const saldo = dados[3];
  if (i == 0) {
    html += `<tr>
        <th>${titular}</th>
        <th>${numero}</th>
        <th>${tipo}</th>
        <th>${saldo}</th>
      </tr>
    `;
  } else {
    html += `<tr>
    <td>${titular}</td>
    <td>${numero}</td>
    <td>${tipo}</td>
    <td>${saldo}</td>
  </tr>
`;
  }
}

html += `</table>`;
// console.log(html);

fs.writeFileSync("index.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${html}
</body>
</html>
`);