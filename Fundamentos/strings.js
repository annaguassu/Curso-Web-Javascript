const escola = "Cod3r"

console.log(escola.charAt(4))//mostra a letra que está na posição 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // tabela unicode

console.log(escola.indexOf('3')) 
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola "+ escola + ("!"))
console.log(escola.replace(3, "e"))

console.log("Bia, Willy, Batata".split(","))//converte em array, separou a partir da vírgula
