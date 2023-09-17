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
    document.getElementById('section-entrar').style.display='none';
    document.getElementById('section-cadastrar').style.display='none';
    document.getElementById('my-header').style.zIndex='70';    
})

function abrirSectionCadastro(){
    document.getElementById('section-cadastrar').style.display='flex';
    document.getElementById('section-entrar').style.display='none';
    document.getElementById('section-login-cadastro').style.display='flex';
    document.getElementById('body').style.overflowY='hidden';
}
function abrirSectionLogin(){
    document.getElementById('section-entrar').style.display='flex';
    document.getElementById('section-cadastrar').style.display='none';
    document.getElementById('section-login-cadastro').style.display='flex';
    document.getElementById('body').style.overflowY='hidden';
}

