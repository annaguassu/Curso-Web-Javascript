console.log(Math.ceil(6.1))// arredonda para cima

const obj1 = {}
obj1.nome = "Bola"
//obj1["Nome"] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //this deixa visivel fora do escopo
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
