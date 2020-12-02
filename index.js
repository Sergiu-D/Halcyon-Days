const navBtn = document.getElementById("nav-btn");
const navBtnLine = document.getElementById("nav-btn-line");
const navigation = document.getElementById("main-nav");
const wrapper = document.querySelector(".wrapper");

navBtn.addEventListener("click", () => {
    // const navHeight = navigation.offsetHeight;

    navBtnLine.classList.toggle("active");
    wrapper.classList.toggle("active");
})


// Carusel

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed: 800,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      progressbarOpposite: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })