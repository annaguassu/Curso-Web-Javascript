let valor // não inicialiazada
console.log(valor)

valor = null // aponta nenhum valor e não aponta um local de memória
// ausencia de valor
console.log(valor)
//console.log(valor.toString()) Erro!

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined //evitar atribuir undefined
console.log(produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto )
© 2021 GitHub, Inc.
Terms
Privacy
