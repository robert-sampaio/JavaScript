// Manipulando Strings e Números

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram os espaços, coloque _

let phrase = 'Eu quero viver o Amor'
let myArray = phrase.split(' ')
let phraseUnderscore = myArray.join('_')
console.log(phraseUnderscore)