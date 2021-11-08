function soboaNoticia(nota){
  if (nota >= 7){
    console.log("Aprovado " + nota)
  }else{
    console.log("Reprovado " + nota)
  }
}

soboaNoticia(7.1)
soboaNoticia(6.9)

function seForVerdade(valor){
  if(valor){
    console.log("É verdade... " + valor)
  } 
}

seForVerdade({})
