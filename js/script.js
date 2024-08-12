// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
            e.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
});
