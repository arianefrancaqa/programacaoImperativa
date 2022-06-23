function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.mediaNotas = function (notas) {
        var i = 0;
        let summ = 0;
        let arrayLen = this.notas.length;

        while (i < arrayLen) {
            summ = summ + this.notas[i++];
        }
        return summ / arrayLen;
    }
}

const aluno1 = new Aluno('Ariane França', 2, [10, 9, 10]);
const aluno2 = new Aluno('João Pedro', 10, [8, 9, 9]);
const aluno3 = new Aluno('Maria Souza', 5, [3, 5, 5]);

console.log(aluno1.mediaNotas());
console.log(aluno2.nome);
console.log(aluno3.mediaNotas());
console.log(aluno3.qtdFaltas);

// crie o objeto literal curso que tem como atributos: nome do curso (string), 
// nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
// (um array composto pelos alunos criados no passo 2).

let curso = {
    nomeCurso: 'Certified Tech Developer',
    notaAprovacao: 7,
    faltasMax: 8,
    listaEstudantes: [aluno1, aluno2, aluno3]
}

// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos 
// nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade 
// lista de estudantes do objeto curso.

const adicionaNovoAlunoNoCurso = (nome, qtdFaltas, notas) => {
    const novoAluno = new Aluno(nome, qtdFaltas, notas);
    curso.listaEstudantes.push(novoAluno)
}

adicionaNovoAlunoNoCurso('Joana da Silva', 4, [5, 5, 5]);
adicionaNovoAlunoNoCurso('Bruna Kenne', 8, [10, 10, 10]);

// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
// se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem 
// que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
// Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

const validaAprovacao = (aluno) => {
    let nota = aluno.mediaNotas();
    let faltas = aluno.qtdFaltas;
    let notaAprovacaoComFaltas = curso.notaAprovacao * 0.10 + curso.notaAprovacao;
    return !!(nota >= curso.notaAprovacao && faltas < curso.faltasMax || faltas == curso.faltasMax && nota >= notaAprovacaoComFaltas);
}

// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de 
// booleanos com os resultados se os alunos aprovaram ou não. 

const resultadoFinal = () => {
    console.log(`--------------------------- Notas Finais - Lista de Resultados ---------------------------
    `)
    for (const element of curso.listaEstudantes) {
        console.log(`------------------------------------------- // -------------------------------------------`)
        console.log(`${element.nome} foi aprovade? ${validaAprovacao(element)}`);
    }
}

resultadoFinal();