let value = {
    receitas: [
        5000
    ],
    despesas: [
        4200
    ],
}

function total() {
    return Number(value.receitas) - Number(value.despesas)
}

total()

if (total() < 0) {
    console.log('Saldo Negativo')
} else {
    console.log('Saldo Positivo')
}

console.log(`Seu saldo é de ${total()}`)