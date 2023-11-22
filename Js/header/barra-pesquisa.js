// document.getElementById('exit-pesquisa-section').addEventListener('click', fecharBarraDePesquisa);
document.getElementById('icon-pesquisa').addEventListener('click', abrirBarraDePesquisa);


function abrirBarraDePesquisa(){
    document.getElementById('pesquisa-section-iframe').style.display = 'flex';
    document.getElementById('body').style.overflowY = 'hidden';
};

function fecharBarraDePesquisa(){
    document.getElementById('pesquisa-section-iframe').style.display = 'none';
    document.getElementById('body').style.overflowY = 'auto';
    // console.log('x clicado')
};


/* Função de pesquisar */

const produtosForaDoBanco = [
    {
        id: '1',
        modelo: 'Leg Press',
        img: '',
        obj3D: '',
        descricao: '----',

        musculacao: 'true',
        cardio: 'false',
        acessorio: 'false',

        subcategoria: 'perna',

        comprimento: '-',
        altura: '-',
        largura: '-',
        garantia: '-',
        peso: '-',
    },
    {
        id: '2',
        modelo: 'Crossover',
        img: '',
        obj3D: '',
        descricao: '----',

        musculacao: 'true',
        cardio: 'false',
        acessorio: 'false',

        subcategoria: 'full',

        comprimento: '-',
        altura: '-',
        largura: '-',
        garantia: '-',
        peso: '-',
    },
    {
        id: '3',
        modelo: 'esteira',
        img: '',
        obj3D: '',
        descricao: '----',

        musculacao: 'false',
        cardio: 'true',
        acessorio: 'false',

        subcategoria: '-',

        comprimento: '-',
        altura: '-',
        largura: '-',
        garantia: '-',
        peso: '-',
    },
    {
        id: '4',
        modelo: 'Escada',
        img: '',
        obj3D: '',
        descricao: '----',

        musculacao: 'false',
        cardio: 'true',
        acessorio: 'false',

        subcategoria: '-',

        comprimento: '-',
        altura: '-',
        largura: '-',
        garantia: '-',
        peso: '-',
    },
    {
        id: '5',
        modelo: 'Halter',
        img: '',
        obj3D: '',
        descricao: '----',

        musculacao: 'true',
        cardio: 'false',
        acessorio: 'true',

        subcategoria: '-',

        comprimento: '-',
        altura: '-',
        largura: '-',
        garantia: '-',
        peso: '-',
    }
];

function pesquisaProdutos(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    const produto = produtosForaDoBanco.find((p) => p.id === idProduto);

    for (i = 0; i < produto.modelo.length; i++){
        if (!produto[i].innerHTML.toLowerCase().includes(input)) {
            produto[i].style.display="none";
        }
        else {
            produto[i].style.display="list-item";  
            alert (produto.modelo)              
        }
    }
}


function pesquisarItem(){
    var item = document.querySelector('#item-resultado p').innerHTML;

    var buscar = window.location.href = `../telas/pesquisa.html?buscar=${item}`;
    parent.window.location.href = buscar;
}


function pesquisar() {
    var input = document.getElementById('searchbar').value;
    if(input.trim() !== ''){
    var buscar = window.location.href = `../telas/pesquisa.html?buscar=${input}`;
    parent.window.location.href = buscar;
    window.location.href = '../iframe/barra-pesquisa.html';
    }
    else{
        // alert("Por favor, digite algo para procurar!");
    }
}


function itemPesquisado(){
    var input = document.getElementById('searchbar').value;

    var divItem = document.createElement('div');
    divItem.setAttribute('id', input+'div');
    divItem.classList.add('item-resultado');

    var sectionResultadoPesquisa = document.getElementById('resultado-pesquisa');

    // Limpar resultados anteriores
    sectionResultadoPesquisa.innerHTML = '';

    // Verificar se há entrada antes de adicionar novos resultados
    if (input.trim() !== '') {
        sectionResultadoPesquisa.appendChild(divItem);

        var pItem = document.createElement('p');
        pItem.setAttribute('id', input+'item')
        pItem.textContent = input;

        divItem.appendChild(pItem);
    }

    divItem.addEventListener('click', ()=>{
        var item = document.getElementById(input+'item').innerHTML;

        var buscar = window.location.href = `../telas/pesquisa.html?buscar=${item}`;
        parent.window.location.href = buscar;
        window.location.href = '../iframe/barra-pesquisa.html';
    })
}