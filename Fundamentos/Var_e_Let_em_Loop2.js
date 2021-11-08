/*
const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
*/

const funcs = []
//add no array até 10, o i
for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
