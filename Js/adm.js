document.getElementById('btn-produto-adicionar').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('section-adicionar-produto').style.opacity = '1'
    document.getElementById('section-adicionar-produto').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})
document.getElementById('btn-produto-editar').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('section-adicionar-produto').style.opacity = '1'
    document.getElementById('section-adicionar-produto').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})
document.getElementById('btn-adicionar-banner').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('adicionar-banner').style.opacity = '1'
    document.getElementById('adicionar-banner').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})

// document.getElementById('exit-produtos-section').addEventListener('click', ()=>{
//     // document.getElementById('section-adicionar-produto').style.display = 'none'
//     document.getElementById('section-adicionar-produto').style.opacity = '0'
//     document.getElementById('section-adicionar-produto').style.zIndex = '-1'
//     document.getElementById('body').style.overflow = 'auto'
// })

function fecharTudo(){
    document.getElementById('section-adicionar-produto').style.opacity = '0'
    document.getElementById('section-adicionar-produto').style.zIndex = '-1'
    document.getElementById('section-adicionar-usuario').style.opacity = '0'
    document.getElementById('section-adicionar-usuario').style.zIndex = '-1'
    document.getElementById('adicionar-banner').style.opacity = '0'
    document.getElementById('adicionar-banner').style.zIndex = '-1'
    document.getElementById('body').style.overflow = 'auto'
}
function fecharAvisos(){
        // document.getElementById('area-aviso').style.display = 'none';
        document.getElementById('area-aviso-produto').style.display = 'none';
        document.getElementById('area-aviso-banner').style.display = 'none';
        document.getElementById('area-aviso-usuario').style.display = 'none';
        document.getElementById('area-aviso-excluir-banner').style.display = 'none';
        document.getElementById('area-aviso-excluir-usuario').style.display = 'none';
        document.getElementById('area-aviso-excluir-produto').style.display = 'none';
}

document.getElementById('btn-usuario-adicionar').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('section-adicionar-usuario').style.opacity = '1'
    document.getElementById('section-adicionar-usuario').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})
document.getElementById('abrirCadastro').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('section-adicionar-usuario').style.opacity = '1'
    document.getElementById('section-adicionar-usuario').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})
document.getElementById('btn-usuario-editar').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'flex'
    document.getElementById('section-adicionar-usuario').style.opacity = '1'
    document.getElementById('section-adicionar-usuario').style.zIndex = '1'
    document.getElementById('body').style.overflow = 'hidden'
})
// document.getElementById('exit-aviso').addEventListener('click', ()=>{
//     document.getElementById('area-aviso').style.display = 'none';
// })
// document.getElementById('exit-aviso-produto').addEventListener('click', ()=>{
//     document.getElementById('area-aviso-produto').style.display = 'none';
// })
// document.getElementById('exit-aviso-banner').addEventListener('click', ()=>{
//     document.getElementById('area-aviso-banner').style.display = 'none';
// })
// document.getElementById('exit-aviso-excluir-banner').addEventListener('click', ()=>{
//     document.getElementById('area-aviso-excluir-banner').style.display = 'none';
// })
function mostrarSenhaUsuario(a){
    const inputSenha = document.getElementById('input-senha-usuario');
    if(a.id === 'icon-mostrar-senha'){
        if(inputSenha.type == 'password'){
            inputSenha.type = 'text';
            inputSenha.placeholder = 'a1a1a1a1'
        }
        else{
            inputSenha.type = "password";
            inputSenha.placeholder="xxxxxxxxx"
        }
    }
}

function verificarFormsEditor(){
    const todosInputs = document.querySelectorAll('.input-usuario');
        const areaAviso = document.getElementById('area-aviso-usuario');
        const aviso = document.getElementById('aviso-usuario');
        let todosPreenchidos = true;
        const email = document.querySelector('input[name=emailEditor]');
        const telefone = document.querySelector('input[name=telefoneEditor]');
        let telefoneValue = telefone.value;
        telefoneValue = telefoneValue.replace(/[^\d]/g, '');
        const cep = document.querySelector('input[name=cepEditor]');
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
        }
}
function cep () {
    const cep = document.querySelector("input[name=cepEditor]");

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
};
cep()


const input = document.getElementById('imgsFoto');
const arquivosSelecionados = document.getElementById('arquivosSelecionados');

input.addEventListener('change', function () {
    arquivosSelecionados.innerHTML = ''; 

    for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        arquivosSelecionados.appendChild(listItem);
    }

    if (this.files.length === 0) {
        arquivosSelecionados.textContent = "Nenhum arquivo selecionado";
    }
});
const input2 = document.getElementById('obj3D');
const nome3DSelecionado = document.getElementById('nome3DSelecionado');

input2.addEventListener('change', function () {
    if (this.files.length > 0) {
        const file = this.files[0];
        nome3DSelecionado.textContent = file.name;
    } else {
        nome3DSelecionado.textContent = "Nenhum arquivo selecionado";
    }
});

function verificarFormsProduto() {
    const todosInputs = document.querySelectorAll('.input-produto');
    const areaAviso = document.getElementById('area-aviso-produto');
    const aviso = document.getElementById('aviso');
    let todosPreenchidos = true;
    const todosSelects = document.querySelectorAll('select');
    let todosSelectsSelecionados = true;
    const obj3DInput = document.getElementById('obj3D');
    const bannerImg = document.getElementById('imgsFoto');

    todosInputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

    todosSelects.forEach(select => {
        if (select.value === 'nao-selecionado') {
            todosSelectsSelecionados = false;
        }
    });

    // Verifique o tipo de arquivo para imgFoto
    if (bannerImg.files.length > 0) {
        const bannerImg = bannerImg.files[0].type;
        if (!bannerImg.includes('image/')) {
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Só é permitido imagens do tipo "jpg", "jpeg" e "png" para o campo de imagens do produto';
            return;
        }
    }

    // Verifique o tipo de arquivo para obj3D
    if (obj3DInput.files.length > 0) {
        const obj3DFileName = obj3DInput.files[0].name;
        const obj3DFileExtension = obj3DFileName.split('.').pop();
        if (obj3DFileExtension !== 'obj') {
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Só é permitido modelos 3D do tipo "obj" para o campo modelo 3D do produto';
            return;
        }
    }

    if (!todosPreenchidos) {
        areaAviso.style.display = 'flex';
        aviso.innerHTML = 'Preencha todos os campos';
    } else if (!todosSelectsSelecionados) {
        areaAviso.style.display = 'flex';
        aviso.innerHTML = 'Selecione uma categoria e/ou subcategoria';
    } else {
        const formulario = document.querySelector('form');
        formulario.submit();
        location.reload();
    }
}


// Bannner section


const imagens = document.querySelectorAll(".banner-img");
const qtnImgs = imagens.length
const bolinhasContainer = document.querySelector(".area-btns-bolinhas-banner");
    const passarEVoltar = document.querySelectorAll('.passar-e-voltar');
    let bannerImgFoco = 0;
    const banners = document.querySelectorAll('.banner-img');
    const maxBanners = banners.length;  

function bolinhasFuntion(imagens) {
    let primeiraIteracao = true;

    imagens.forEach((imagem, index) => {
    const bolinha = document.createElement("i");
    bolinha.classList.add("btn-bolinha-banner");

    bolinha.addEventListener("click", () => {
        const bolinhas = document.querySelectorAll(".btn-bolinha-banner");
        bolinhas.forEach((b) => {
            b.classList.remove('banner-foco');
        });
        bannerImgFoco = index;
        // console.log(bannerImgFoco)
        bolinha.classList.add('banner-foco');

        banners[bannerImgFoco].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        })

        });

        bolinhasContainer.appendChild(bolinha);

        if (primeiraIteracao) {
        bolinha.classList.add('banner-foco');
        primeiraIteracao = false;
        }

    });
}

function passarEVoltarControl(){
    

    passarEVoltar.forEach((btn) => {
        btn.addEventListener('click', (e)=>{
            const voltar = e.target.classList.contains('btn-banner-anterior');
            const proximo = e.target.classList.contains('btn-banner-proximo');
            
            if(voltar){
                bannerImgFoco -= 1;
            }
            else if(proximo){
                bannerImgFoco += 1;
            }
            if(bannerImgFoco >= maxBanners){
                bannerImgFoco = 0;
            };
            if (bannerImgFoco < 0) {
                bannerImgFoco = maxBanners - 1;
            };

            banners[bannerImgFoco].scrollIntoView({
                behavior: "smooth",
                inline: "center",
            })
            // console.log(bannerImgFoco)
            const bolinhaFoco = document.querySelectorAll('.btn-bolinha-banner');
            bolinhaFoco.forEach((b) => {
                b.classList.remove('banner-foco');
            });
            bolinhaFoco[bannerImgFoco].classList.add('banner-foco');
    });
})
}
function controlFunction(){
    bolinhasFuntion(imagens);
    passarEVoltarControl();
}

controlFunction();


if(qtnImgs <= 0){
        const localImg = document.querySelector(".area-imgsBanner");

        const img = document.createElement('img')
        img.src = '../imgs/banner-home-img-reserva.jpg';
        img.classList.add('banner-img');
        img.title = 'Não existe nenhum banner no momento'

        localImg.appendChild(img);

        document.getElementById('btns-btn-banner-home').style.display = ('none');
    }
else if(qtnImgs === 1){
        document.getElementById('btns-btn-banner-home').style.display = ('none');
}

const input3 = document.getElementById('bannerImg');
const bannerAdicionado = document.getElementById('bannerAdicionado');
input3.addEventListener('change', function () {
    if (this.files.length > 0) {
        const file = this.files[0];
        bannerAdicionado.textContent = file.name;
    } else {
        bannerAdicionado.textContent = "Nenhum arquivo selecionado";
    }
});

function verificarBanner() {
    const todosInputs = document.querySelectorAll('.input-banner');
    const areaAviso = document.getElementById('area-aviso-banner');
    const aviso = document.getElementById('aviso-banner');
    let todosPreenchidos = true;
    const bannerImg = document.getElementById('bannerImg');

    todosInputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });

    // Verifique o tipo de arquivo para imgFoto
    if (bannerImg.files.length > 0) {
        const bannerImgType = bannerImg.files[0].type;
        if (!bannerImgType.includes('image/')) {
            areaAviso.style.display = 'flex';
            aviso.innerHTML = 'Só é permitido imagens do tipo "jpg", "jpeg" e "png"';
            return;
        }
    }

    if (!todosPreenchidos) {
        areaAviso.style.display = 'flex';
        aviso.innerHTML = 'Adicione a imagem do banner';
    }else {
        const formulario = document.querySelector('form');
        formulario.submit();
        location.reload();
    }
}

document.getElementById('btn-banner-excluir').addEventListener('click', ()=>{
    document.getElementById('area-aviso-excluir-banner').style.display = 'flex'
})
document.getElementById('btn-usuario-excluir').addEventListener('click', ()=>{
    document.getElementById('area-aviso-excluir-usuario').style.display = 'flex'
})
document.getElementById('btn-produto-excluir').addEventListener('click', ()=>{
    document.getElementById('area-aviso-excluir-produto').style.display = 'flex'
})