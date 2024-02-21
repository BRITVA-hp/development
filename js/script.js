document.addEventListener('DOMContentLoaded', () => {

  //burger
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  const menuClose = document.querySelector('.menu__close')

  burger.addEventListener('click', () => {
    menu.classList.add('menu--active')
  })
  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--active')
  })

  const observer = lozad();
  observer.observe();

  // маска
  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }


  function range(rangeInputSum_, rangeTrackSum_, inputSum_) {
    const rangeInputSum = document.querySelector(rangeInputSum_),
      rangeTrackSum = document.querySelector(rangeTrackSum_),
      inputSum = document.querySelector(inputSum_);


    let minSum = +rangeInputSum.getAttribute('min'),
      maxSum = +rangeInputSum.getAttribute('max'),
      stepSum = +rangeInputSum.getAttribute('step');

    rangeInputSum.addEventListener('input', function() {
      let position = 100 / (maxSum - stepSum) * (this.value - stepSum);

      rangeTrackSum.style.width = `${position}%`;
      inputSum.value = prettify(this.value);
    });

    inputSum.addEventListener('input', function () {
      this.value = prettify(this.value.replace(/\D/g, ''))
      if (this.value.replace(/\D/g, '') > maxSum) {
        this.value = prettify(maxSum)
      }
      if(this.value.replace(/\D/g, '') < minSum) {
        rangeInputSum.value = 0
        rangeTrackSum.style.width = 0 + '%'
        return
      }
      if (this.value.replace(/\D/g, '') >= minSum && this.value.replace(/\D/g, '') <= maxSum)  {
        rangeTrackSum.style.width = `${100 / (maxSum - stepSum) * (this.value.replace(/\D/g, '') - stepSum)}%`;
        rangeInputSum.value = this.value.replace(/\D/g, '')
      }
    })
  }

  range('.quiz__range__input', '.quiz__range__track', '.quiz__range__field')

  //faq

  const faqItems = document.querySelectorAll('.faq__item')

  faqItems.forEach(item => {
    item.querySelector('.faq__item__header').addEventListener('click', () => {
      item.classList.toggle('faq__item--active')
    })
  })

// modal

  // function calcScroll() {
  //   let div = document.createElement('div');
  //
  //   div.style.width = '50px';
  //   div.style.height = '50px';
  //   div.style.overflowY = 'scroll';
  //   div.style.visibility = 'hidden';
  //
  //   document.body.appendChild(div);
  //   let scarollWidth = div.offsetWidth - div.clientWidth;
  //   div.remove();
  //
  //   return scarollWidth;
  // }
  //
  // let scrollWidth = calcScroll();
  //
  // function modal(modal, modalActiveClass, triggers, modalClose) {
  //   const triggers_ = document.querySelectorAll(triggers),
  //     modal_ = document.querySelector(modal),
  //     modalClose_ = document.querySelector(modalClose);
  //
  //   if (triggers_.length > 0) {
  //     triggers_.forEach(item => {
  //       item.addEventListener('click', () => {
  //         modal_.classList.add(modalActiveClass);
  //         document.body.style.overflow = 'hidden';
  //         document.body.style.marginRight = `${scrollWidth}px`;
  //       });
  //     });
  //
  //     modalClose_.addEventListener('click', () => {
  //       modal_.classList.remove(modalActiveClass);
  //       document.body.style.overflow = '';
  //       document.body.style.marginRight = '0px';
  //     });
  //
  //     modal_.addEventListener('click', (e) => {
  //       if (e.target.classList.contains('modal__container')) {
  //         modal_.classList.remove(modalActiveClass);
  //         document.body.style.overflow = '';
  //         document.body.style.marginRight = '0px';
  //       }
  //     });
  //   }
  // }
  //
  // modal('.modal', 'modal--active', '[data-modal]', '.modal__close');

})