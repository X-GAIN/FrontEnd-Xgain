// document.getElementById('icon-filter').addEventListener('click', ()=>{
//     document.getElementById('section-filtro').classList.add('sectionFiltroFechado');
// })

document.getElementById('abrir-itens-filtro-categoria-cardio').addEventListener('click', ()=>{

    if(document.getElementById('itens-filtro-categoria-cardio').style.display === 'block'){
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none'
        document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(-90deg)'
    }
    else{
    document.getElementById('itens-filtro-categoria-cardio').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(0deg)'
    }
})
document.getElementById('abrir-itens-filtro-categoria-musculacao').addEventListener('click', ()=>{

    if(document.getElementById('itens-filtro-categoria-musculação').style.display === 'block'){
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none'
        document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(-90deg)'
    }
    else{
    document.getElementById('itens-filtro-categoria-musculação').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(0deg)'
    }
})
document.getElementById('abrir-itens-filtro-categoria-acessorios').addEventListener('click', ()=>{144

    if(document.getElementById('itens-filtro-categoria-acessorios').style.display === 'block'){
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none'
        document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(-90deg)'
    }
    else{
    document.getElementById('itens-filtro-categoria-acessorios').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(0deg)'
    }
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth < 769){
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(-90deg)';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(-90deg)';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(-90deg)';
    }
    else{
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'block';
        document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(0deg)';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'block';
        document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(0deg)';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'block';
        document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(0deg)';
    }
})

if(window.innerWidth < 769){
    document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
    document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(-90deg)';
    document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
    document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(-90deg)';
    document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
    document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(-90deg)';
}
else{
    document.getElementById('itens-filtro-categoria-cardio').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-cardio').style.transform = 'rotate(0deg)';
    document.getElementById('itens-filtro-categoria-musculação').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-musculacao').style.transform = 'rotate(0deg)';
    document.getElementById('itens-filtro-categoria-acessorios').style.display = 'block';
    document.getElementById('abrir-itens-filtro-categoria-acessorios').style.transform = 'rotate(0deg)';
};


// Função dos filtros
var cardioTag = false, musculacaoTag = false, acessoriosTag = false;
function categoriaFiltros(){
    const categorias = document.querySelectorAll('.categoriaFiltro');
    
    categorias.forEach((categoria)=>{
        categoria.addEventListener('click', (categoria)=>{
            const cardio = categoria.target.classList.contains('cardio');
            const musculacao = categoria.target.classList.contains('musculacao');
            const acessorios = categoria.target.classList.contains('acessorios');
            if(cardio){
                cardioTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&cardio=${cardioTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&cardio=${cardioTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
            else if(musculacao){
                musculacaoTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&musculacao=${musculacaoTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&musculacao=${musculacaoTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
            else if(acessorios){
                acessoriosTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&acessorios=${acessoriosTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&acessorios=${acessoriosTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
        })
    })

    //Aqui vem o valor de cada variavel para o filtro das categorias
    const urlParams = new URLSearchParams(window.location.search);
    cardioTag = urlParams.get('cardio');
    musculacaoTag = urlParams.get('musculacao');
    acessoriosTag = urlParams.get('acessorios');

    if(cardioTag){
        document.getElementById('filtro-cardio').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Cárdio | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Cárdio';
        cardioTag = null;
    }
    else if(musculacaoTag){
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Musculação | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Musculação';
        musculacaoTag = null;
    }
    else if(acessoriosTag){
        document.getElementById('filtro-acessorios').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Acessórios | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Acessórios';
        acessoriosTag = null;
    }

    const urlComFiltro = window.location.href;
    document.getElementById('icon-filter').title = 'Categorias';
    if(urlComFiltro.includes('&')){
        console.log(urlComFiltro)
        document.getElementById('icon-filter').title = 'Limpar seleção';
        document.getElementById('icon-filter').addEventListener('click', () => {
            let recortarFiltro = urlComFiltro.split('&');
            let urlSemFiltro = recortarFiltro[0];
            window.location.href = urlSemFiltro;
            console.log(urlComFiltro)
        });
    }
}

categoriaFiltros()

var esteiraTag = false, 
escadaTag = false, 
bikeTag = false, 
abdomenTag = false, 
bracoTag = false,
costasTag = false,
ombroTag = false, 
peitoTag = false, 
pernaTag = false, 
utilitariosTag = false, 
equipamentosTag = false, 
outrosTag = false;
function subCategoriaFiltros(){
    const subCategorias = document.querySelectorAll('.subFiltro')

    subCategorias.forEach((subCategoria)=>{
        subCategoria.addEventListener('click', (subCategoria)=>{
            const esteira = subCategoria.target.classList.contains('esteira');
            const escada = subCategoria.target.classList.contains('escada');
            const bike = subCategoria.target.classList.contains('bike');
            const abdomen = subCategoria.target.classList.contains('abdomen');
            const braco = subCategoria.target.classList.contains('braco');
            const costas = subCategoria.target.classList.contains('costas');
            const ombro = subCategoria.target.classList.contains('ombro');
            const peito = subCategoria.target.classList.contains('peito');
            const perna = subCategoria.target.classList.contains('perna');
            const utilitarios = subCategoria.target.classList.contains('utilitarios');
            const equipamentos = subCategoria.target.classList.contains('equipamentos');
            const outros = subCategoria.target.classList.contains('outros');

            // console.log(esteira, escada, bike)
            if(esteira){
                esteiraTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&esteira=${esteiraTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&esteira=${esteiraTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
            else if(escada){
                escadaTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&escada=${escadaTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&escada=${escadaTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
            else if(bike){
                bikeTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&bike=${bikeTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&escada=${bikeTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl)
            }
            else if(abdomen){
                abdomenTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&abdomen=${abdomenTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&abdomen=${abdomenTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            else if(braco){
                bracoTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&braco=${bracoTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&braco=${bracoTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            else if(costas){
                costasTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&costas=${costasTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&costas=${costasTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(ombro){
                ombroTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&ombro=${ombroTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&ombro=${ombroTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(peito){
                peitoTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&peito=${peitoTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&peito=${peitoTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(perna){
                pernaTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&perna=${pernaTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&perna=${pernaTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(utilitarios){
                utilitariosTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&utilitarios=${utilitariosTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&utilitarios=${utilitariosTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(equipamentos){
                equipamentosTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&equipamentos=${equipamentosTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&equipamentos=${equipamentosTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }
            
            else if(outros){
                outrosTag = true;
                const url = window.location.href;
                if(url.includes('&')){
                    var limparUrl = url.split('&');
                    var urlLimpa = limparUrl[0];
                    var atualizarUrl = urlLimpa + `&outros=${outrosTag}`;
                    window.location.href = atualizarUrl;
                }
                else{
                    var atualizarUrl = window.location.href + `&outros=${outrosTag}`;
                    window.location.href = atualizarUrl;
                }
                console.log(atualizarUrl);
            }            
    })
})
    //Aqui vem o valor de cada variavel para o filtro das sub categorias
    const urlParams = new URLSearchParams(window.location.search);
    esteiraTag = urlParams.get('esteira');
    escadaTag = urlParams.get('escada');
    bikeTag = urlParams.get('bike');
    abdomenTag = urlParams.get('abdomen');
    bracoTag = urlParams.get('braco');
    costasTag = urlParams.get('costas');
    ombroTag = urlParams.get('ombro');
    peitoTag = urlParams.get('peito');
    pernaTag = urlParams.get('perna');
    utilitariosTag = urlParams.get('utilitarios');
    equipamentosTag = urlParams.get('equipamentos');
    outrosTag = urlParams.get('outros');

    if(esteiraTag){
        document.getElementById('filtro-cardio').style.color = '#992d2d';
        document.getElementById('subFiltro-esteira').style.color = '#992d2d';
        document.getElementById('subFiltro-esteira').style.borderBottomColor = '#992d2d';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Esteira | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Esteira';
        esteiraTag = null;
    }
    else if(escadaTag){
        document.getElementById('filtro-cardio').style.color = '#992d2d';
        document.getElementById('subFiltro-escada').style.color = '#992d2d';
        document.getElementById('subFiltro-escada').style.borderBottomColor = '#992d2d';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Escada | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Escada';
        escadaTag = null;
    }
    else if (bikeTag) {
    document.getElementById('filtro-cardio').style.color = '#992d2d';
    document.getElementById('subFiltro-bike').style.color = '#992d2d';
    document.getElementById('subFiltro-bike').style.borderBottomColor = '#992d2d';
    document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
    document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
    document.getElementById('titlePaginacategoria').innerHTML = 'Bike | XGAIN';
    document.getElementById('categoriaTitle').innerHTML = 'Bike';
    bikeTag = null;
    }

    else if(abdomenTag){
        document.getElementById('subFiltro-abdomen').style.color = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('subFiltro-abdomen').style.borderBottomColor = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Abdômen | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Abdômen';
        abdomenTag = null;
    }
    
    else if(bracoTag){
        document.getElementById('subFiltro-braco').style.color = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('subFiltro-braco').style.borderBottomColor = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Braço | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Braço';
        bracoTag = null;
    }
    else if(costasTag){
        document.getElementById('subFiltro-costas').style.color = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('subFiltro-costas').style.borderBottomColor = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Costas | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Costas';
        costasTag = null;
    }
    
    else if(ombroTag){
        document.getElementById('subFiltro-ombro').style.color = '#992d2d';
        document.getElementById('subFiltro-ombro').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Ombro | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Ombro';
        ombroTag = null;
    }
    else if(peitoTag){
        document.getElementById('subFiltro-peito').style.color = '#992d2d';
        document.getElementById('subFiltro-peito').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Peito | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Peito';
        peitoTag = null;
    }
    
    else if(pernaTag){
        document.getElementById('subFiltro-perna').style.color = '#992d2d';
        document.getElementById('subFiltro-perna').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-musculacao').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-acessorios').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Perna | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Perna';
        pernaTag = null;
    }
    
    else if(utilitariosTag){
        document.getElementById('subFiltro-utilitarios').style.color = '#992d2d';
        document.getElementById('subFiltro-utilitarios').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-acessorios').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Utilitários | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Utilitários';
        utilitariosTag = null;
    }
    
    else if(equipamentosTag){
        document.getElementById('subFiltro-equipamentos').style.color = '#992d2d';
        document.getElementById('subFiltro-equipamentos').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-acessorios').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Equipamentos | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Equipamentos';
        equipamentosTag = null;
    }
    
    else if(outrosTag){
        document.getElementById('subFiltro-outros').style.color = '#992d2d';
        document.getElementById('subFiltro-outros').style.borderBottomColor = '#992d2d';
        document.getElementById('filtro-acessorios').style.color = '#992d2d';
        document.getElementById('itens-filtro-categoria-cardio').style.display = 'none';
        document.getElementById('itens-filtro-categoria-musculação').style.display = 'none';
        document.getElementById('titlePaginacategoria').innerHTML = 'Outros | XGAIN';
        document.getElementById('categoriaTitle').innerHTML = 'Outros';
        outrosTag = null;
    }
    
}

subCategoriaFiltros();

// futuro quando isso estiver funfando
function alterarTituloDaPesquisa(){
    var buscar;
    const urlParams = new URLSearchParams(window.location.search);
    buscar = urlParams.get('buscar');
    // var urlPesquisa = window.location.href = `pesquisa.html/busca=${busca}`;

    let titulo = document.getElementById('pesquisaTitle');

    if(buscar.length > 30){
        titulo.innerHTML = buscar.slice(0, 30) + '...';
    }else {titulo.innerHTML = buscar;}
    titulo.title = buscar;
    document.getElementById('titlePagina').innerHTML = buscar + ' | XGAIN';
}
alterarTituloDaPesquisa();


// function (){
//     var filtroLimpar = document.getElementById('icon-filter');
//     
    
// }
