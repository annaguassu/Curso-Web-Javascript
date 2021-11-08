function tratarErroELancar(erro)
{
  throw new Error("iii...")
}

function gritandoNome(obj){
  try {
  console.log(obj.name.toUpperCase() + "!!!")
  }catch(e){
    tratarErroELancar(e)
  }finally{
    console.log("final")
  }
}

const obj = {nome : Cláudia};

gritandoNome(obj)


//ideal p/ não mostrar ao usuário informações de estrutura, em inglês etc.
