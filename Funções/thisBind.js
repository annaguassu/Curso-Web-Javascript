const Pessoa = {
  saudacao: "Bom dia!",
  falar(){
    console.log(this.saudacao)//acessar "saudacao" nesse contexto
  }
}

Pessoa.falar()
const falar = Pessoa.falar
falar()//conflito entre paradigmas: funcional e 00

const falarDePessoa = Pessoa.falar.bind(Pessoa)
falarDePessoa()
