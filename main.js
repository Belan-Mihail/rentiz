const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}

// Filter Dropdown

const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}

// SWIPER

const swiper = new Swiper('.popular-slider', {      
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        660: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        // when window width is >= 480px
       
        }
    }

  );


  // Gallery

  const galleryItems = document.querySelectorAll('.gallery__item');

  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      new Swiper(item, {
        slidesPerView:  1,
        autoplay: {
          delay: 5000,
        },
        effect: 'fade',
      })
    })
  }
