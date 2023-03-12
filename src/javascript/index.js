const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        botao.classList.add('select');

        trocarImagem();

        imagens[indice].classList.add('ativa');
    })
})

function trocarImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelect = document.querySelector('.select');
    botaoSelect.classList.remove('select');
}
