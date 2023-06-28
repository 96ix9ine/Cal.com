'use strict'

const btn = document.getElementById("reviews-gradient-button");
const gradient = document.getElementById("reviews-gradient");

btn.addEventListener('click', () => {
    gradient.classList.toggle('reviews-gradient-invisible');
    btn.classList.toggle('reviews-gradient-button-top');
});

