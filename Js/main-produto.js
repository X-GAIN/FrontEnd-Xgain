
document.getElementById('exit-img3d-section').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "none";
});
document.getElementById('icon-3d').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "flex";
});
document.getElementById('icon-3d2').addEventListener('click', () => {
    document.getElementById('section-img3d').style.display = "flex";
});

// let produto1 = document.getElementById('produto-1'), produto2 = document.getElementById('produto-2'), produto3 = document.getElementById('produto-3');
// produto1.addEventListener('click', () => {
//     document.getElementById('img-principal').src = produto1.src;
// });
// produto2.addEventListener('click', () => {
//     document.getElementById('img-principal').src = produto2.src;
// });
// produto3.addEventListener('click', () => {
//     document.getElementById('img-principal').src = produto3.src;
// });

const imagensProdutos = document.querySelectorAll('.img-produto-galery');

imagensProdutos.forEach(imagemProduto => {
    imagemProduto.addEventListener('click', () => {
        document.getElementById('img-principal').src = imagemProduto.src;
    });
});
