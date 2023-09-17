const iconCarrinho = document.getElementById('icon-carrinho');

iconCarrinho.addEventListener('click', abrirCarrinho);

function verificarLarguraDaJanela(){
    const larguraTela = window.innerWidth
    
    if(larguraTela < 769){
        document.getElementById('body').style.overflowY = 'hidden';
    }
}

function abrirCarrinho(){
    document.getElementById('carrinho-section').style.right = '0';
    verificarLarguraDaJanela();
}
document.getElementById('exit-carrinho-section').addEventListener('click', fecharCarrinho);
document.getElementById('voltar-carrinho').addEventListener('click', fecharCarrinho);

function fecharCarrinho(){
    document.getElementById('carrinho-section').style.right = '-770px';
    document.getElementById('body').style.overflowY = 'auto';
}

