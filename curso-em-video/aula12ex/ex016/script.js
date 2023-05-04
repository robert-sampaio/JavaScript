function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute('src', './assets/menino/menino-2y.jpg')
            } else if (idade >= 5 && idade < 15) {
                // Criança
                img.setAttribute('src', './assets/menino/menino-10y.jpg')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', './assets/menino/menino-20y.jpg')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', './assets/menino/menino-30y.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', './assets/menino/menino-50y.jpg')
            } else if (idade >= 65) {
                // Idoso
                img.setAttribute('src', './assets/menino/menino-65y.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute('src', './assets/menina/menina-2y.jpg')
            } else if (idade < 15) {
                // Criança
                img.setAttribute('src', './assets/menina/menina-10y.jpg')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', './assets/menina/menina-20y.jpg')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', './assets/menina/menina-30y.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', './assets/menina/menina-40y.jpg')
            } else if (idade >= 65) {
                // Idoso
                img.setAttribute('src', './assets/menina/menina-65y.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}