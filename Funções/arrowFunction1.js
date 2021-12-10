let dobro = function (a){
  return 2 * a 
}

dobro = (a) =>{
  return 2 * a
}//sempre anonima, por isso precisa ser armazenada em alguma váriavel ou constante

dobro = a => 2 * a //função de uma linha só/return implicito

console.log(dobro(Math.PI))//dobro do PI

let ola = function (){
  return "Olá"
}

ola = () => "Olá"
//ola = _ => "Olá"

console.log(ola())
