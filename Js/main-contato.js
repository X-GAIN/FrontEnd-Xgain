document.getElementById('exit-aviso-section-contato').addEventListener('click', () => {
    document.getElementById('area-aviso-contato').style.display = "none";
});

var envio = false;
function verificarFormsContato(){
    const todosInputs = document.querySelectorAll('.inputs-contato');
    const areaAviso = document.getElementById('area-aviso-contato');
    const aviso = document.getElementById('aviso');
    let todosPreenchidos = true;
    const email = document.querySelector('input[name=emailContato]');
    const telefone = document.querySelector('input[name=telefoneContato]');
    let telefoneValue = telefone.value;
    telefoneValue = telefoneValue.replace(/[^\d]/g, '');

    todosInputs.forEach(input => {
        if (input.value.trim() === '') {27949316
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
    else{
        const formulario = document.querySelector('form');
        formulario.submit();
        location.reload();
        envio = true;
        window.location.href = `contato.html?envio=${envio}`;
    }
    
    // console.log(telefoneValue)

}

const urlParams = new URLSearchParams(window.location.search);
envio = urlParams.get('envio');
console.log(envio);

if(envio){
    const areaAviso = document.getElementById('area-aviso-contato');
    document.getElementById('tituloNotificacao').innerHTML = 'MENSAGEM ENVIADA!';
    document.getElementById('aviso').innerHTML = 'Entraremos em contato em até 72h, fique atento em sua caixa de e-mail';
    areaAviso.style.display = 'flex';
    envio = null;
    console.log(envio);
}