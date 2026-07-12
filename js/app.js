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



// CONTACT FORM

document.getElementById('contact__form').addEventListener('submit', function(e) {
            e.preventDefault(); 
            const btn = this.querySelector('.submit__btn');
            btn.innerHTML = '<span class="btn__text">იგზავნება...</span>';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span class="btn__text">წარმატებით გაიგზავნა!</span>';
                btn.style.backgroundColor = '#4CAF50';
                btn.style.opacity = '1';
                this.reset();
                
                setTimeout(() => {
                    btn.innerHTML = '<span class="btn__text">შეტყობინების გაგზავნა</span>';
                    btn.style.backgroundColor = '#000101';
                    btn.disabled = false;
                }, 3000);
            }, 2000);
        });