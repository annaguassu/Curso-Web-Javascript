let numero = 1
{
    let numero = 2
    console.log("Dentro:", numero)
}
 console.log("Fora:", numero)

 //dá preferência para o escopo menor (escopo de bloco), senão, usa a externa
 // var tem escopo global e de função, let tem both + escopo de bloco
