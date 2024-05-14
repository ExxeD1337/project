const swiperTop = new Swiper('.top__swiper', {

    effect:'fade',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });


const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
});



document.querySelectorAll('.accordeon__triger').forEach((item)=>{
  item.addEventListener('click',()=>{
    item.parentNode.classList.toggle('accordeon__item--active')
  })
})