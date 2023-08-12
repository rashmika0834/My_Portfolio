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

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('#Header .navbar a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset +height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header navbar a [href*=' + id +']').classList.add('active');
//             });
//         };

//     });
// };

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#Header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};



