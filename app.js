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