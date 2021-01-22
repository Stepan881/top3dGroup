document.addEventListener("DOMContentLoaded", () => {

  const cityList = document.querySelector(`.city`);
  const citybtn = document.querySelector(`.city__btn`);
  const cityBtnArrow = document.querySelector(`.city__btn-arrow`);
  let windowWidth = window.innerWidth;

  window.addEventListener(`resize`, () => {
    windowWidth = window.innerWidth;
  });


  cityList.addEventListener("mouseenter", () => {
    if (windowWidth < 768) return;
    cityBtnArrow.style.transform = `rotate(180deg)`;
    console.log(1);
  });

  cityList.addEventListener('mouseleave', () => {
    if (windowWidth < 768) return;
    cityBtnArrow.style.transform = `rotate(0deg)`;
  });

  citybtn.addEventListener(`click`, () => {
    if (windowWidth > 768) return;
    
    citybtn.classList.toggle(`city__btn--active`)
  });

  const headerBtnArticle = document.querySelector(`.header__btn-article`);
  const navMenu = document.querySelector(`.nav`);
  headerBtnArticle.addEventListener(`click`, () => {
    if (windowWidth > 768) return;
    
    headerBtnArticle.classList.toggle(`header__btn-article--open`)
    navMenu.classList.toggle(`nav--open`)
  });

  const navLinkOpen = document.querySelectorAll(`.nav__link-open`);

  navLinkOpen.forEach(el => {
    el.addEventListener(`click`, function(evt) {
      if (evt.target.parentNode.querySelector(`.nav__sub-list--open`)) {
        evt.target.parentNode.querySelector(`.nav__sub-list`).classList.remove(`nav__sub-list--open`);
        return;
      }
      navLinkOpen.forEach(elem => {
        if (elem.parentNode.querySelector(`.nav__sub-list--open`)) {
          elem.parentNode.querySelector(`.nav__sub-list--open`).classList.remove(`nav__sub-list--open`);
        }      
      });
      evt.target.parentNode.querySelector(`.nav__sub-list`).classList.add(`nav__sub-list--open`);

    })
  });


  const videoSwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 73,
    loop: true,
    navigation: {
      nextEl: '.about__arrow--next',
      prevEl: '.about__arrow--prew',
    },
    breakpoints: {
      944: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });

});