
//toogle class active

const navList = document.querySelector('.navbar');

//ketika hamburger menu di klik

document.querySelector('#hamburger-menu').onclick = (e) => {
    navList.classList.toggle('active');
    e.preventDefault();
};


//klik di luar sidebar menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('active');
    }
});


var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 190,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
    },
  });
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}