function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './assets/imagem-manha.jpg'
        document.body.style.background = '#a6dced'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = './assets/imagem-tarde.jpg'
        document.body.style.background = '#e6e68f'
    } else {
        // BOA NOITE!
        img.src = './assets/imagem-noite.jpg'
        document.body.style.background = '#191970'
    }
}