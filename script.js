

const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
//close the menu when close button is click
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
 
//close menu when the nav link is clicked
navLinks.forEach(link =>{
link.addEventListener("click", () => menuOpenButton.click());
});
//  this is initialization of swiper in Testimonials section

const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      grabCursor:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // responsive breakpoints
  breakpoints:{
    0:{
        sliderPerView:1
    },
    768:{
        sliderPerView:2
    },
    1024:{
        sliderPerView:3
    }
   
  }
    
  });


