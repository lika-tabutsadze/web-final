// BURGER MENU


function BurgerMenu() {
    const toggle = document.getElementById('burger__menu');
    const navbar = document.getElementById('navbar');
    
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
}

BurgerMenu()

// SCROLL TO TOP BUTTON

const scrollToTop = document.getElementById("scroll__btn")

window.onscroll = function(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        scrollToTop.style.display = "block";
    }else{
        scrollToTop.style.display = "none";
    }
};

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});