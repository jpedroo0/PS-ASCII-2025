
/*=============== MENU SUPERIOR ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu oculto */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== SKILLS SLIDER SCROLL ===============*/
function initializeCarousel(carouselId, leftBtnId, rightBtnId) {
   const carousel = document.querySelector(`#${carouselId}`);
   const leftBtn = document.querySelector(`#${leftBtnId}`);
   const rightBtn = document.querySelector(`#${rightBtnId}`);
   const firstCardWidth = carousel.querySelector(".card").offsetWidth;

   let isDragging = false, startX, startScrollLeft;


   const arrowBts = [leftBtn, rightBtn];
   arrowBts.forEach(btn => {
       btn.addEventListener("click", () => {
           carousel.scrollLeft += btn.id === leftBtnId ? -firstCardWidth : firstCardWidth;
       });
   });

   const dragStart = (e) => {
       isDragging = true;
       carousel.classList.add("dragging");
       startX = e.pageX;
       startScrollLeft = carousel.scrollLeft;
   };

   const dragging = (e) => {
       if (!isDragging) return;
       carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
   };

   const dragStop = () => {
       isDragging = false;
       carousel.classList.remove("dragging");
   };

   carousel.addEventListener("mousedown", dragStart);
   carousel.addEventListener("mousemove", dragging);
   document.addEventListener("mouseup", dragStop);
}

initializeCarousel("carousel", "left", "right");
initializeCarousel("carousel2", "left2", "right2");