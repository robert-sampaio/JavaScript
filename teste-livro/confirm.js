function moveon() {
    // Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
    var answer = confirm("Ready to move on?");
    // Se ele clicou no botão "OK", faz o navegador carregar um nova página
    if (answer) window.location = "http://google.com";
}

setTimeout(moveon, 5000);