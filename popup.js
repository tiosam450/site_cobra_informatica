const card = document.querySelectorAll('.card');
const popUp = document.querySelectorAll('.container_pop_up')
const fechar = document.querySelectorAll('.fechaPopup')

// ABRE POP UP
function abrePopUp(index){
    popUp.forEach((item)=>{
        item.classList.remove('popUpAtivo')
    })
    popUp[index].classList.add('popUpAtivo')
}



card.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        abrePopUp(index);
    })
})

// FECHA POP UP
function fechaPopUp(){
    popUp.forEach((item)=>{
        item.classList.remove('popUpAtivo')
    })

}

fechar.forEach((item)=>{
    item.addEventListener('click', fechaPopUp)
})

// FECHA POP UP AO PRESSIONAR 'ESQ'
function sair(event){
    if(event.key ==='Escape'){
        popUp.forEach((item)=>{
            item.classList.remove('popUpAtivo')
        })
    }
}

window.addEventListener('keydown', sair)