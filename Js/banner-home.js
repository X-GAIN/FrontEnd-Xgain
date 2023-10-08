const imagens = document.querySelectorAll(".banner-img");
const qtnImgs = imagens.length
const bolinhasContainer = document.querySelector(".btns-bolinha-banner-home");


function bolinhasFuntion(imagens) {
    let primeiraIteracao = true;

    imagens.forEach((index) => {
    const bolinha = document.createElement("i");
    bolinha.classList.add("btn-bolinha-banner");

    bolinha.addEventListener("click", () => {
        const bolinhas = document.querySelectorAll(".btn-bolinha-banner");
        
        bolinhas.forEach((b) => {
            b.classList.remove('banner-foco');
        });
        
        bolinha.classList.add('banner-foco');

        let img = bolinha.index
        });

        bolinhasContainer.appendChild(bolinha);

        if (primeiraIteracao) {
        bolinha.classList.add('banner-foco');
        primeiraIteracao = false; // Define para 'false' após a primeira iteração
    }
    });
}

bolinhasFuntion(imagens);

if(qtnImgs <= 0){
        const localImg = document.querySelector(".banners-img");

        const img = document.createElement('img')
        img.src = '../imgs/banner-home-img-reserva.jpg';
        img.classList.add('banner-img');

        localImg.appendChild(img);

        document.getElementById('btns-setinha-banner-home').style.display = ('none');
    }
else if(qtnImgs === 1){
        document.getElementById('btns-setinha-banner-home').style.display = ('none');
}