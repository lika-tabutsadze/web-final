function BurgerMenu() {
    const toggle = document.getElementById('burger__menu');
    const navbar = document.getElementById('navbar');
    
    
    toggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    
}

BurgerMenu()