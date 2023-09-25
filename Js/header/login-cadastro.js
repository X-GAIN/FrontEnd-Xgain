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