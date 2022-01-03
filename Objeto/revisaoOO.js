const carro = {
  modelo: "Marea",
  preco: 10000,
  proprietario: {
    nome: "Rafael",
    idade: 35,
    grupo: "C",
    endereco:{
      logradouro: "Rua ABC",
      numero: 123
    } 
  },
  condutores: [{
    nome: "Joao",
    idade: 27
  }, {
    nome: "Caio",
    idade: 26
  }],
  calcularValorSeguro: function(){
    //...
  }
}

carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logradouro = "R. Silvio Quarezima"
console.log(carro)
