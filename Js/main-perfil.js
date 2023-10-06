document.getElementById('title-conta-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'block'
    document.getElementById('informacao-perfil-carrinho').style.display = 'none'
    document.getElementById('informacao-perfil-privacidade').style.display = 'none'

    document.getElementById('title-conta-perfil').classList.add ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.remove ('title-selecionado');
})
document.getElementById('title-carrinho-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'none'
    document.getElementById('informacao-perfil-carrinho').style.display = 'block'
    document.getElementById('informacao-perfil-privacidade').style.display = 'none'

    document.getElementById('title-conta-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.add ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.remove ('title-selecionado');
})
document.getElementById('title-privacidade-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'none'
    document.getElementById('informacao-perfil-carrinho').style.display = 'none'
    document.getElementById('informacao-perfil-privacidade').style.display = 'block'

    document.getElementById('title-conta-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.add ('title-selecionado');
})