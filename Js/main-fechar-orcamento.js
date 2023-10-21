const lista = document.getElementById('area-lista-itens');
const btnAbrirFechar = document.getElementById('lista-itens-titulo');
const iconAbrirFechar = document.getElementById('icone-lista-itens-titulo');

if(window.innerWidth < 769){
    lista.classList.add('area-lista-itens-sumir');
    iconAbrirFechar.style.transform = 'rotate(0deg)';
}
else{
    lista.classList.remove('area-lista-itens-sumir');
    iconAbrirFechar.style.transform = 'rotate(90deg)';
}
btnAbrirFechar.addEventListener('click', () => {
    if (lista.classList.contains('area-lista-itens-sumir')) {
        lista.classList.remove('area-lista-itens-sumir');
        iconAbrirFechar.style.transform = 'rotate(90deg)';
    } else {
        lista.classList.add('area-lista-itens-sumir');
        iconAbrirFechar.style.transform = 'rotate(0deg)';
    }
})

document.getElementById('exit-aviso-section-orcamento').addEventListener('click', () => {
    document.getElementById('area-aviso-orcamento').style.display = "none";
});

(function () {
    const cep = document.querySelector("input[name=cep]");

    cep.addEventListener("blur", (e) => {
    const value = cep.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
        .then((response) => response.json())
        .then((json) => {
        if (json.logradouro) {
            document.querySelector("input[name=cidade]").value = json.localidade;
            document.querySelector("input[name=estado]").value = json.uf;
        }
    });
});
})();