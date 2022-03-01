let note = 80
let A = note >= 90 && note <= 100
let B = note >= 80 && note <= 89
let C = note >= 70 && note <= 79
let D = note >= 60 && note <= 69
let F = note < 60

if(A) {
    console.log('A')
} else if(B) {
    console.log('B')
} else if(C) {
    console.log('C')
} else if(D) {
    console.log('D')
} else if(F) {
    console.log('F')
} else {
    console.log('Nenhuma nota válida computada')
}