$(document).ready(function () {
  // Toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.header .menu').toggleClass("active");
  });

  // Handle menu item click to close the navigation bar
  $('.menu a').click(function () {
    $('.header .menu').removeClass("active");
  });
});

const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.menu a');

// Smooth scrolling for menu item clicks
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of link clicks
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - header.offsetHeight,
      behavior: 'smooth'
    });
    // Close the menu after clicking a link
    $('.header .menu').removeClass("active");
  });
});

// Sticky header on scroll script
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
}
});





