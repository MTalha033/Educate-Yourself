 burger=document.querySelector('.burger');
 navbar=document.querySelector('.navbar');
 navList=document.querySelector('.nav-list');
 rightNav=document.querySelector('.rightnav');


// Select all navigation links
const navLinks = document.querySelectorAll('.nav-list li a');

// Toggle navigation menu visibility when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide navigation menu
        navList.classList.toggle('visibility');
        rightNav.classList.toggle('visibility');
        navbar.classList.toggle('h-nav');
    });
});

// Toggle navigation menu visibility when hamburger icon is clicked
burger.addEventListener('click', () => {
    navList.classList.toggle('visibility');
    rightNav.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
});


