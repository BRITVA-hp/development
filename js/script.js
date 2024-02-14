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

  //map

  // initMap();
  //
  // async function initMap() {
  //   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  //   await ymaps3.ready;
  //
  //   const {
  //     YMap,
  //     YMapDefaultSchemeLayer,
  //     YMapDefaultFeaturesLayer,
  //     YMapControls,
  //     YMapControlButton
  //   } = ymaps3;
  //
  //   const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
  //   const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
  //
  //   // Иницилиазируем карту
  //   const map = new YMap(
  //     // Передаём ссылку на HTMLElement контейнера
  //     document.getElementById('map'),
  //
  //     // Передаём параметры инициализации карты
  //     {
  //       location: {
  //         // Координаты центра карты
  //         center: [50.120648, 53.191557],
  //
  //         // Уровень масштабирования
  //         zoom: 15
  //       }
  //     }
  //   );
  //
  //   // Добавляем слой для отображения схематической карты
  //   map.addChild(new YMapDefaultSchemeLayer());
  //
  //   map.addChild(new YMapDefaultFeaturesLayer());
  //
  //   const marker = new YMapDefaultMarker({
  //     coordinates: [50.120648, 53.191557],
  //     title: 'Автозапчасти PATRON',
  //     subtitle: 'Автомагазин на ул. агибалова 68',
  //     color: '#77A6D6',
  //     popup: {content: 'Popup on the default marker', position: 'left',},
  //     onClick: () => {
  //       console.log(1)
  //     }
  //   })
  //
  //   map.addChild(marker);
  //
  //   const controls = new YMapControls({position: 'top right'});
  //
  //   map.addChild(
  //     // Using YMapControls you can change the position of the control
  //     controls
  //       // Add the zoom control to the map
  //       .addChild(new YMapZoomControl({}))
  //   );
  //
  //   // Create an div element that will be passed to the YMapControlButton
  //   const fullScreenElement = document.createElement('div');
  //   fullScreenElement.className = 'fullscreen';
  //
  //   // The fullscreenchange event is fired immediately after the browser switches into or out of fullscreen mode
  //   document.addEventListener('fullscreenchange', function () {
  //     fullScreenElement.classList.toggle('exit-fullscreen');
  //   });
  //
  //   function fullScreenBtnHandler() {
  //     // The document.fullscreenElement returns the Element that is currently being presented in fullscreen mode in this document, or null if fullscreen mode is not currently in use
  //     if (document.fullscreenElement) {
  //       // The document.exitFullscreen() requests that the element on this document which is currently being presented in fullscreen mode be taken out of fullscreen mode
  //       document.exitFullscreen();
  //       document.querySelector('.contacts__map').classList.remove('contacts__map--active');
  //     } else {
  //       // The element.requestFullscreen() method issues an asynchronous request to make the element be displayed in fullscreen mode
  //       map.container.requestFullscreen();
  //       document.querySelector('.contacts__map').classList.add('contacts__map--active');
  //     }
  //   }
  //
  //   // Add YMapControlButton that will enable or disable fullscreen mode
  //   const fullScreenBtn = new YMapControlButton({
  //     element: fullScreenElement,
  //     onClick: fullScreenBtnHandler
  //   });
  //   controls.addChild(fullScreenBtn);
  //
  // }

})