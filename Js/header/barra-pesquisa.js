/* const focusDaBarra = document.getElementById('search').addEventListener('focusout', fucusDaBarraDePesquisa)

function fucusDaBarraDePesquisa(){
    focusDaBarra.style.borderColor = '#000';
} */

document.getElementById('exit-pesquisa-section').addEventListener('click', fecharBarraDePesquisa);
document.getElementById('icon-pesquisa').addEventListener('click', abrirBarraDePesquisa);


function abrirBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'flex';
    /* document.getElementsByTagName('body').ClassList.add('overflow-y'); */
}

function fecharBarraDePesquisa(){
    document.getElementById('pesquisa-section').style.display = 'none';
    /* document.getElementsByTagName('body').ClassList.remove('overflow-y'); */
}

/* const xDaBarra = document.getElementById('search').addEventListener('input', xDeLimpar())

function xDeLimpar(){
        if(xDaBarra.value != ''){
            document.getElementById('x-limpar-barra-pesquisa').style.visibility = 'none';
        }
        else{
            document.getElementById('x-limpar-barra-pesquisa').style.visibility = 'hidden';
        }
    } */


document.getElementById('x-limpar-barra-pesquisa').addEventListener('click', limparBarraDePesquisa)

function limparBarraDePesquisa(){
    document.getElementById('search').value = '';
}