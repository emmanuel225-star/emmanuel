document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector('.toggle_btn');
    const contactDropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', () => {
        contactDropdownMenu.classList.toggle('open');
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('.navbar a, .dropdown-menu a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            window.scrollBy(0, offsetTop);
        });
    }
});
