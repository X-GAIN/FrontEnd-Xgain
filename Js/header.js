const header = document.getElementById('myHeader');
        let isHeaderExpanded = true;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 0 && isHeaderExpanded) {
                header.style.height = '50px';
                document.querySelector('.icon-logo').classList.add('icon-logo-reduzido');
                document.querySelector('.icons-header').classList.add('icons-reduzidos');
                document.querySelector('.icon-perfil').classList.add('icon-perfil-reduzido');
                document.querySelector('.text-left-header').classList.add('item-header-reduzido');
                document.querySelector('.text-right-header').classList.add('item-header-reduzido');
                isHeaderExpanded = false;
                
            } else if (window.scrollY === 0 && !isHeaderExpanded) {
                header.style.height = '100px';
                document.querySelector('.icon-logo').classList.remove('icon-logo-reduzido');
                document.querySelector('.icons-header').classList.remove('icons-reduzidos');
                document.querySelector('.icon-perfil').classList.remove('icon-perfil-reduzido');
                document.querySelector('.text-left-header').classList.remove('item-header-reduzido');
                document.querySelector('.text-right-header').classList.remove('item-header-reduzido');
                isHeaderExpanded = true;
            }
        });

/* header.addEventListener('mouseenter', normalHeader);

function normalHeader(){
    if(isHeaderExpanded == true){
        return
    }
    header.style.height='100px';
    document.querySelector('.icon-logo').classList.remove('icon-logo-reduzido');
    document.querySelector('.icons-header').classList.remove('icons-reduzidos');
    document.querySelector('.icon-perfil').classList.remove('icon-perfil-reduzido');
    document.querySelector('.text-left-header').classList.remove('item-header-reduzido');
    document.querySelector('.text-right-header').classList.remove('item-header-reduzido');
    
    header.addEventListener('mouseleave', semiHeader);
    function semiHeader(){
        header.style.height = '50px';
        document.querySelector('.icon-logo').classList.add('icon-logo-reduzido');
        document.querySelector('.icons-header').classList.add('icons-reduzidos');
        document.querySelector('.icon-perfil').classList.add('icon-perfil-reduzido');
        document.querySelector('.text-left-header').classList.add('item-header-reduzido');
        document.querySelector('.text-right-header').classList.add('item-header-reduzido');
    }
} */