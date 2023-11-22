
document.getElementById('exit-img3d-section').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "none";
});
document.getElementById('icon-3d').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "flex";
});
document.getElementById('icon-3d2').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "flex";
});

const imagensProdutos = document.querySelectorAll('.img-produto-galery');

imagensProdutos.forEach(imagemProduto => {
    imagemProduto.addEventListener('click', () => {
        document.getElementById('img-principal').src = imagemProduto.src;
    });
});

function maisOuMenos(valor){
    const numero = document.getElementById('numero-produto');
    let contador = parseInt(numero.textContent);

    contador = Math.max(1, contador + valor);
    
    numero.textContent = contador;
}