function EducationDrop() {
    const educationList = document.getElementById("edulist2");
    educationList.classList.toggle("display");
}

function VoluntDrop() {
    const educationList = document.getElementById("edulist1");
    educationList.classList.toggle("show");
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.scroll = () => {
    // Sticky Navbar
    // let header = document.querySelector('Header');
    // header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon and navbar when a navbar link is clicked
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};