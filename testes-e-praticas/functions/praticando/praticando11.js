// Manipulando Strings e Números

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar um item no começo
techs.unshift("sql")
// remover o item do fim
//techs.pop()
// remover o item do começo
//techs.shift()
// pegar somente alguns elementos array
//console.log(techs.slice(0, 2))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(0, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)