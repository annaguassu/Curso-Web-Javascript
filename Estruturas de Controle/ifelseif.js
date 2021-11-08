Number.prototype.entre = function(a,b){
      return this >= a && this <= b
}

const imprimirNota = function(nota){
  if(nota.entre(9, 10)){
    console.log("Quadro de honra")
  } else if(nota.entre(7, 8)){
    console.log("aprovado")
  } else if(nota.entre(4, 6.99)){
    console.log("recuperação")
  } else if(nota.entre(0, 3.99)){
    console.log("Reprovado")
  } else{
    console.log("Nota Inválida")
  }
  console.log("fim")
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(5)
imprimirNota(2)
imprimirNota(-1)
imprimirNota(11)
