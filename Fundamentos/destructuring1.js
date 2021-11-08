const pessoa = {
    nome: "Ana",
    idade: 17,
    endereco:{
        logradouro: "Rua Silvio Quarezima",
        numero: 189

    }
}

const {nome, idade} = pessoa //tira de dentro do obj 'pessoa' o 'nome' e 'idade'
console.log(nome,idade)

const {nome : n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
