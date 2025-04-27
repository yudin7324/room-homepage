document.addEventListener('DOMContentLoaded', () => {
  const selectors = {
    NAV: '.js-nav',
    BURGER: '.js-burger',
    BODY: 'body',
    SLIDER: '.js-slider',
    SLIDE: '.js-slide',
    CONTENT_SLIDE: '.js-content-slide',
    PREV_BTN: '.js-prev-btn',
    NEXT_BTN: '.js-next-btn',
  };
  const classes = {
    ACTIVE: 'active',
    NO_SCROLL: 'no-scroll'
  }

  const nav = document.querySelector(selectors.NAV);
  const burger = document.querySelector(selectors.BURGER);
  const body = document.querySelector(selectors.BODY);

  if(!nav || !burger) {
    return;
  }

  burger.addEventListener('click', toggleNav);

  function toggleNav() {
    if(nav.classList.contains(classes.ACTIVE)) {
      nav.classList.remove(classes.ACTIVE);
      burger.classList.remove(classes.ACTIVE);
      body.classList.remove(classes.NO_SCROLL);
    } else {
      nav.classList.add(classes.ACTIVE);
      burger.classList.add(classes.ACTIVE);
      body.classList.add(classes.NO_SCROLL);
    }
  }

  function initSlider() {
    const slides = document.querySelectorAll(selectors.SLIDE);
    const contentSlides = document.querySelectorAll(selectors.CONTENT_SLIDE);
    const prevBtn = document.querySelector(selectors.PREV_BTN);
    const nextBtn = document.querySelector(selectors.NEXT_BTN);
    let currentIndex = 0;

    function updateSlides() {
      slides.forEach((slide, i) => {
        slide.classList.toggle(classes.ACTIVE, i === currentIndex);
      });

      contentSlides.forEach((cSlide, i) =>
        cSlide.classList.toggle(classes.ACTIVE, i === currentIndex)
      );
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    });
  }

  initSlider();

});
