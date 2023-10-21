/* document.getElementById('entrar').addEventListener('click', () => {
    document.getElementById('section-entrar').style.display='flex';
    document.getElementById('section-cadastrar').style.display='none';
    document.getElementById('section-login-cadastro').style.display='flex';
})
document.getElementById('cadastrar-se').addEventListener('click', () => {
    document.getElementById('section-cadastrar').style.display='flex';
    document.getElementById('section-entrar').style.display='none';
    document.getElementById('section-login-cadastro').style.display='flex';
}) */
document.getElementById('exit-login-section').addEventListener('click', () => {
    document.getElementById('body').style.overflowY='auto';
    document.getElementById('section-login-cadastro').style.display='none';
    document.getElementById('my-header').style.zIndex='70';
    document.getElementById('iframe-login-cadastro').style.display='none';
    document.getElementById('iframe-login-cadastro').src = '../iframe/login.html';
});

function fecharTudo(){
    document.getElementById('body').style.overflowY='auto';
    document.getElementById('section-login-cadastro').style.display='none';
    document.getElementById('my-header').style.zIndex='70';
    document.getElementById('iframe-login-cadastro').style.display='none';
    document.getElementById('iframe-login-cadastro').src = '../iframe/login.html';
};

function abrirSectionCadastro(){
    document.getElementById('body').style.overflowY='hidden';
    document.getElementById('section-login-cadastro').style.display='block';
    document.getElementById('iframe-login-cadastro').style.display='block';
    document.getElementById('body').style.overflowY='hidden';
    document.getElementById('iframe-login-cadastro').src = '../iframe/cadastro.html';
};
function abrirSectionLogin(){
    document.getElementById('body').style.overflowY='hidden';
    document.getElementById('section-login-cadastro').style.display='block';
    document.getElementById('iframe-login-cadastro').style.display='block';
    document.getElementById('body').style.overflowY='hidden';
    document.getElementById('iframe-login-cadastro').src = '../iframe/login.html';
};

document.getElementById('exit-aviso-section').addEventListener('click', fecharAviso)
function fecharAviso(){
    document.getElementById('area-aviso').style.display = 'none';
};


// function mostrarSenha1(){
//     const inputSenha1 = document.getElementById('input-senha-1');
//     const inputSenha2 = document.getElementById('input-senha-2');
//     document.getElementById('icon-mostrar-senha-1').addEventListener('click', () => {
//         if(inputSenha1.type == 'password'){
//             inputSenha1.type = 'text';
//         }
//         else{
//             inputSenha1.type = "password";
//         }
//     })
//     document.getElementById('icon-mostrar-senha-2').addEventListener('click', () => {
//         if(inputSenha2.type === 'password'){
//             inputSenha2.type = 'text';
//         }
//         else{
//             inputSenha2.type = "password";
//         }
//     })
// }

//     const inputSenha3 = document.getElementById('input-senha-login')
//     document.getElementById('icon-mostrar-senha-login').addEventListener('click', () => {
//         if(inputSenha3.type == 'password'){
//             inputSenha3.type = 'text';
//         }
//         else{
//             inputSenha3.type = "password";
//         }
//     })

// mostrarSenha1();

function mostrarSenha(a){
    const inputSenha1 = document.getElementById('input-senha-1');
    const inputSenha2 = document.getElementById('input-senha-2');
    const inputSenha3 = document.getElementById('input-senha-login');
    if(a.id === 'icon-mostrar-senha-login'){
        if(inputSenha3.type == 'password'){
            inputSenha3.type = 'text';
        }
        else{
            inputSenha3.type = "password";
        }
    }
    else if(a.id === 'icon-mostrar-senha-1'){
        if(inputSenha1.type == 'password'){
            inputSenha1.type = 'text';
        }
        else{
            inputSenha1.type = "password";
        }
    }
    else if(a.id === 'icon-mostrar-senha-2'){
        if(inputSenha2.type == 'password'){
            inputSenha2.type = 'text';
        }
        else{
            inputSenha2.type = "password";
        }
    }
}