var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
<<<<<<< HEAD
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else if (hora < 24) {
    console.log('Boa Noite!')
} else {
    console.log('O horário está incorreto!')
}
=======
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
>>>>>>> 51149c9f37aea402e1c15b9e94adefb7e6e843c4
