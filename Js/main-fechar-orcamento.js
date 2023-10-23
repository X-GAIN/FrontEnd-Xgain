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
    const cep = document.querySelector("input[name=cepOrcamento]");

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

var envio = false;
function verificarFormsOrcamento(){
    const todosInputs = document.querySelectorAll('.inputs-orcamento');
        const areaAviso = document.getElementById('area-aviso-orcamento');
        const aviso = document.getElementById('aviso');
        const motivo = document.getElementById('motivo');
        motivo.innerHTML = '--ERRO--' 
        let todosPreenchidos = true;
        const email = document.querySelector('input[name=emailOrcamento]');
        const telefone = document.querySelector('input[name=telefoneOrcamento]');
        let telefoneValue = telefone.value;
        telefoneValue = telefoneValue.replace(/[^\d]/g, '');
        const cep = document.querySelector('input[name=cepOrcamento]');
        let cepValue = cep.value;
        cepValue = cepValue.replace(/[^\d]/g, '');


        todosInputs.forEach(input => {
            if (input.value.trim() === '') {
                todosPreenchidos = false;
            }
        });

        if (!todosPreenchidos) {
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Preencha todos os campos';
        }
        else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Email incorreto';
        }

        else if(telefoneValue === ''){
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Telefone inválido';
        }
        else if(!(telefoneValue.length >= 10 && telefoneValue.length <= 11)){
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Telefone inválido';
        }
        else if(cepValue === ''){
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'CEP inválido';
        }
        else if(!(cepValue.length === 8)){
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'CEP inválido';
        }
        else{
            const formulario = document.querySelector('form');
            formulario.submit();
            envio = true;
            window.location.href = `fechar-orcamento.html?envio=${envio}`;
        }
}
const urlParams = new URLSearchParams(window.location.search);
envio = urlParams.get('envio');
console.log(envio);

if(envio){
    const areaAviso = document.getElementById('area-aviso-orcamento');
    areaAviso.style.display = 'flex';
    envio = null;
    console.log(envio);
}
