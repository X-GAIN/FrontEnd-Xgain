const loading = document.querySelector('.tela-load')

function preLoading(){
    loading.style.opacity = '1';
    document.querySelector('#body').style.overflow = 'hidden';

    setTimeout(() => {
        loading.style.display = 'none'
        document.querySelector('#body').style.overflow = 'auto';
    }, 1500);
}