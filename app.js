const hamBurger = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.ham-menu');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('active');
    hamMenu.classList.toggle('active');
})


const navbarList = document.querySelectorAll(".list-item");

navbarList.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        navbarList.forEach(navItem => navItem.classList.remove('active'));
        console.log("clicked");
        // Add active class to the clicked item
        this.classList.add('active');
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden-animation');
hiddenElements.forEach((el) => observer.observe(el));



























const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    loader.style.transformStyle = "all";
    loader.style.transitionDuration = "3s";
    loader.style.opacity = "0";
    loader.style.display = "none";
});


















