/*cambiar el icono por cerrar*/
let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    menu.classList.toggle('active');
};

/*================  quita el menu al hacer scroll   ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


        /*===============   despliega el menu   ===============*/
        let header = document.querySelector('header');
        /*==============    despliega el nav con menu  ==========*/
        header.classList.toggle('sticky', window.scrollY > 100);
        /*=============     remueve el menu al dar clic ========*/
        menuIcon.classList.remove('fa-x');
        menu.classList.remove('active');



};

        
