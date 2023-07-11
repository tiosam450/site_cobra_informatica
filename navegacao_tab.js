const tabMenu = document.querySelectorAll('.botoes h2');
const tabDots = document.querySelectorAll('.dots');
const sectionTab = document.querySelectorAll('.responsabilidadeSocial');

function navegacao(index) {
    sectionTab.forEach((itens) => {
        itens.classList.remove('tabMenuAtivo')
    });
    sectionTab[index].classList.add('tabMenuAtivo');

    tabMenu.forEach((itens) => {
        itens.classList.remove('btn_ativo')
    })
    tabDots.forEach((itens) => {
        itens.classList.remove('d_active')
    })
    
    tabMenu[index].classList.add('btn_ativo')
    tabDots[index].classList.add('d_active')
    
}

tabMenu.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        navegacao(index)
    });
});

tabDots.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        navegacao(index)
    });
});