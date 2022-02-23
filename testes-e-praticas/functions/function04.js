// function scope
let subject = 'Read a book'

function createThink(subject) {
    subject = 'Play a game'
    return subject
}

console.log(subject)
console.log(createThink(subject))