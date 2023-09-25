document.getElementById('exit-pesquisa-section').addEventListener('click', fecharBarraDePesquisa);
document.getElementById('icon-pesquisa').addEventListener('click', abrirBarraDePesquisa);


function abrirBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'flex';
    document.getElementById('body').style.overflowY = 'hidden';
};

function fecharBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'none';
    document.getElementById('body').style.overflowY = 'auto';
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