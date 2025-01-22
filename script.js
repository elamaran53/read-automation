// menu icon navbar 

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll section active links 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');




window.onscroll = ()=>{

sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navlinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});


    // sticky navbar 

let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);


// remove menu icon when click navbar link 

menuicon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// dark mode light 

let darkmodeicon = document.querySelector('#darkmode-icon');

darkmodeicon.onclick = () =>{
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

// scrool reveal 

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img, .home-content h3', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });