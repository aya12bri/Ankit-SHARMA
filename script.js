let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');
const skillsLists = document.querySelectorAll('.skills-list');
const skillsBoxs = document.querySelectorAll('.resume-box');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

skillsLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.skills-list.active').classList.remove('active');
        list.classList.add('active'); 
      
        document.querySelector('.resume-box.active').classList.remove('active');
        skillsBoxs[idx].classList.add('active');
    });
});



