const iconCarrinho = document.getElementById('icon-carrinho');

iconCarrinho.addEventListener('click', abrirCarrinho);

function abrirCarrinho(){
    document.getElementById('carrinho-section').style.right = '0';
}
document.getElementById('exit-carrinho-section').addEventListener('click', fecharCarrinho);
document.getElementById('voltar-carrinho').addEventListener('click', fecharCarrinho);

function fecharCarrinho(){
    document.getElementById('carrinho-section').style.right = '-400px';
}