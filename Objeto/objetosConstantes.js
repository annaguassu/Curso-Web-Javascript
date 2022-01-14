//pessoa -> 123 -> {...}
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

//pessoa <- 456 <- {...} 
//pessoa = {nome: "Ana"}

//não pode atribuir a const um nome objeto em outro endereço de memória, se está no endereço 123, ficará no 123
 Object.freeze(pessoa)//congela o obj pessoa, então não dá pra mexer mais (sem excluir, add, alterar etc.)

pessoa.nome = "Maria"
console.log(pessoa.nome)
console.log(pessoa)
