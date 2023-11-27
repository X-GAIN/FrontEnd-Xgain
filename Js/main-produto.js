
function fechar3D(){
    document.getElementById('iframe-section-img3d').style.display = "none";
    document.querySelector('#body').style.overflow = 'auto';
};

function abrir3D(){
    document.getElementById('iframe-section-img3d').style.display = "flex";
    document.getElementById('body').style.overflow = 'hidden';
}

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

// document.getElementById('titleProduto').innerHTML = document.getElementById('nomeProduto').innerHTML + ' | XGAIN';