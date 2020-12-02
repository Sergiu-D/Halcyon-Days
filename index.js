const navBtn = document.getElementById("nav-btn");
const navBtnLine = document.getElementById("nav-btn-line");
const navigation = document.getElementById("main-nav");
const wrapper = document.querySelector(".wrapper");

navBtn.addEventListener("click", () => {
    // const navHeight = navigation.offsetHeight;

    navBtnLine.classList.toggle("active");
    wrapper.classList.toggle("active");
})