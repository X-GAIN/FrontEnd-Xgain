/* const focusDaBarra = document.getElementById('search').addEventListener('focusout', fucusDaBarraDePesquisa)

function fucusDaBarraDePesquisa(){
    focusDaBarra.style.borderColor = '#000';
} */

document.getElementById('exit-pesquisa-section').addEventListener('click', fecharBarraDePesquisa);
document.getElementById('icon-pesquisa').addEventListener('click', abrirBarraDePesquisa);


function abrirBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'flex';
    document.getElementById('body').style.overflowY = 'hidden';
}

function fecharBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'none';
    document.getElementById('body').style.overflowY = 'auto';
}

// const xDaBarra = document.getElementById('search').addEventListener('change', xDeLimpar())
// const xDaBarra = document.getElementById('search');
// function xDeLimpar(){
//         if(xDaBarra.value != ''){
//             document.getElementById('x-limpar-barra-pesquisa').style.visibility = 'none';
//         }
//         else{
//             document.getElementById('x-limpar-barra-pesquisa').style.visibility = 'hidden';
//         }
//         xDeLimpar()
//     }
// xDeLimpar();

// document.getElementById('x-limpar-barra-pesquisa').addEventListener('click', limparBarraDePesquisa)

// function limparBarraDePesquisa(){
//     document.getElementById('search').value = '';
// }

// function aparecerPesquisa(){
//     if(document.getElementById('search').value != ''){
//         document.getElementById('item-resultado').style.display ="block";
//     }
//     else{
//         document.getElementById('item-resultado').style.display ="none";
//     }
// }