document.getElementById('exit-aviso-section-contato').addEventListener('click', () => {
    document.getElementById('area-aviso-contato').style.display = "none";
});

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
        parent.location.reload();
    }
    
    // console.log(telefoneValue)

}