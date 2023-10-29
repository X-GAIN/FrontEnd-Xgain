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

document.getElementById('exit-produtos-section').addEventListener('click', ()=>{
    // document.getElementById('section-adicionar-produto').style.display = 'none'
    document.getElementById('section-adicionar-produto').style.opacity = '0'
    document.getElementById('section-adicionar-produto').style.zIndex = '-1'
    document.getElementById('body').style.overflow = 'auto'
})