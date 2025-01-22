// Selecionar o ícone do menu e a lista <ul>
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

// Alternar a visibilidade do menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
    const isMenuVisible = menuList.style.display === 'block';
    menuList.style.display = isMenuVisible ? 'none' : 'block';
});
