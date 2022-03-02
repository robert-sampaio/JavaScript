let family = {
    incomes: [
        3000, 750, 300
    ],
    expenses: [
        300, 1000, 1200
    ],
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = 'Negativo'

    if(itsOk) {
        balanceText = 'Positivo'
    }

    console.log(`Seu saldo está ${balanceText} e é de ${total.toFixed(2)} reais.`)
}

calculateBalance()