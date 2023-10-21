document.getElementById('title-conta-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'block'
    document.getElementById('informacao-perfil-carrinho').style.display = 'none'
    document.getElementById('informacao-perfil-privacidade').style.display = 'none'

    document.getElementById('title-conta-perfil').classList.add ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.remove ('title-selecionado');
})
document.getElementById('title-carrinho-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'none'
    document.getElementById('informacao-perfil-carrinho').style.display = 'block'
    document.getElementById('informacao-perfil-privacidade').style.display = 'none'

    document.getElementById('title-conta-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.add ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.remove ('title-selecionado');
})
document.getElementById('title-privacidade-perfil').addEventListener('click', () => {
    document.getElementById('informacao-perfil-conta').style.display = 'none'
    document.getElementById('informacao-perfil-carrinho').style.display = 'none'
    document.getElementById('informacao-perfil-privacidade').style.display = 'block'

    document.getElementById('title-conta-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-carrinho-perfil').classList.remove ('title-selecionado');
    document.getElementById('title-privacidade-perfil').classList.add ('title-selecionado');
})


function mostrarSenhaEditar(a){
    const inputSenha = document.getElementById('input-senha-editar');
    if(a.id === 'icon-mostrar-senha-editar'){
        if(inputSenha.type == 'password'){
            inputSenha.type = 'text';
        }
        else{
            inputSenha.type = "password";
        }
    }
}

function habilitarEdicao(){
    const btnAtualizar = document.getElementById('btn-atualizar-perfil');
    let inputs = document.querySelectorAll('.input-edicao')
    const inputFoco = document.getElementById('informacao-perfil-nome');
    if(btnAtualizar.innerText === 'Editar informações'){
        btnAtualizar.innerText = 'Atualizar informações';
        inputs.forEach((input) => {
            input.removeAttribute("disabled");
        });
        inputFoco.focus();
    document.getElementById('icon-mostrar-senha-editar').style.visibility = 'visible';
    btnAtualizar.addEventListener('click', ()=>{
        btnAtualizar.type = 'submit'
    })
    }
}

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