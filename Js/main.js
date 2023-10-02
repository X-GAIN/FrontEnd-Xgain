window.sr = ScrollReveal({ reset: true });

sr.reveal('.section-banner-home');
sr.reveal('.section-categorias-main-home');
sr.reveal('.section-produtos-destaque-home');
sr.reveal('.section-sobre-home');
sr.reveal('.section-banner-cadastro');

sr.reveal('.section-banner-titulo-main');
sr.reveal('.area-sobre-nos');
sr.reveal('.area-como');
sr.reveal('.area-desafios');
sr.reveal('.area-bem-vindo');


sr.reveal('.section-forms-contato');
sr.reveal('.area-info');
sr.reveal('.area-redes-sociais');



//Banner

// document.getElementById('btn-setinha-banner-D').addEventListener('click', () => {
//     const scrollPosition = document.getElementById('banners-img').clientWidth;
//     document.getElementById('banners-img').scrollLeft += scrollPosition;
// });
// document.getElementById('btn-setinha-banner-E').addEventListener('click', () => {
//     const scrollPosition = document.getElementById('banners-img').clientWidth;
//     document.getElementById('banners-img').scrollLeft -= scrollPosition;
// });

document.getElementById('exit-aviso-section-contato').addEventListener('click', () => {
    document.getElementById('area-aviso-contato').style.visibility = "hidden";
});


//Filtro
