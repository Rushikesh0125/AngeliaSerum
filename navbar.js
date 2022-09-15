const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-con");
    const navcon = document.querySelectorAll('.nav-con li');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        navcon.forEach((link, index) => {

            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navconFade 0.5s ease forwards ${index/5 + 1}s`;
            }
     
        });

        burger.classList.toggle('tag');

    });


}
navslide();