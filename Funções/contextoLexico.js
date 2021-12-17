const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}
//funcao carrega consigo o contexto lexico, aonde ela foi definida
exec()
