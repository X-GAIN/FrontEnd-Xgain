const loading = document.querySelector('.tela-load')
const load3D = document.getElementById('load-3d')

function preLoading(){
    loading.style.opacity = '1';
    document.querySelector('#body').style.overflow = 'hidden';

    setTimeout(() => {
        loading.style.display = 'none'
        document.querySelector('#body').style.overflow = 'auto';
    }, 1500);
}

function preLoading3D(){
    load3D.style.opacity = '1';
    document.querySelector('#body').style.overflow = 'hidden';

    setTimeout(() => {
        load3D.style.display = 'none'
        document.querySelector('#body').style.overflow = 'auto';
    }, 1500);
}