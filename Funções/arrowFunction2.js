function Pessoa(){
  this.idade = 0

  setInterval(()=> {//dispara por segundo essa funçao
    this.idade++
    console.log(this.idade)
  }, 1000)
}

// no arrow function, o 'this' não varia
new Pessoa
