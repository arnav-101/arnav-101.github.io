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

const texts = ["front-end developer", "an 11th grader", "an enthusiastic learner"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;
const dynamicText = document.getElementById("dynamicText");

function typeText() {
  if (charIndex < texts[index].length) {
    dynamicText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    dynamicText.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, delayBetweenTexts);
});
