// try/catch

function SayMyName(name= '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

try {
    SayMyName()
} catch(e) {
    console.log(e)
}
