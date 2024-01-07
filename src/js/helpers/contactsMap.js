import loadApi from "./loadApi";

export default function contactsMap() {
  const contactsSection = document.querySelector(".contacts");
  if (!contactsSection) return;

  const map = document.querySelector(".js-map");
  const url = `https://api-maps.yandex.ru/2.1/?apikey=${map.dataset.apiKey}&lang=ru_RU`;
  const zoom = map.dataset.zoom;
  const placemark = map.dataset.placemark;
  const buttons = contactsSection.querySelectorAll('.contacts__button');

  const buttonsContainer = contactsSection.querySelector('.contacts__buttons');
  buttonsContainer.addEventListener('click', (e) => {
    const target = e.target.closest('.contacts__button');

    if (target) {
      const buttonCoords = target.dataset.coords.split(',');
      yandexMap.setCenter([+buttonCoords[0], +buttonCoords[1]]);
      buttons.forEach(button => button.classList.remove('is-active'));
      target.classList.add('is-active');
    }
  })

  let yandexMap;

  loadApi('yandex', url, () => {
    ymaps.ready(init);
  })

  function init() {
    const coords = buttons[0].dataset.coords.split(',');

    yandexMap = new ymaps.Map(
      map, {
        center: [+coords[0], +coords[1]],
        zoom,
        controls: [],
      }, {
        searchControlProvider: "yandex#search",
        suppressMapOpenBlock: true
      }
    )

    const DARK_MAP = 'custom#dark';
    ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
      // Ссылка на темные тайлы Яндекс.Карт
      // От стандартной отличается наличием &theme=dark
      return new ymaps.Layer(
        'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark',
      );
    });

    /* Связываем слой с типом карты */
    ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));

    buttons.forEach(button => {
      addMarker(button.dataset.coords.split(','), yandexMap, placemark);
    });
  }

  function addMarker(coords, map, markerIcon) {
    const marker = new ymaps.Placemark([+coords[0], +coords[1]], {
      balloonContent: `
          <div class="balloon">
            <div class="balloon__left"></div>
            <div class="balloon__right">
                <span class="balloon__office-name">Smart park ★ 4,5</span>
                <span class="balloon__office-view">Бизнес-центр</span>
            </div>
          </div>
      `,
      hideIconOnBalloonOpen: false
    }, {
      iconLayout: 'default#image',
      iconImageHref: markerIcon,
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -16],
      hideIconOnBalloonOpen: false
    });

    map.geoObjects.add(marker);
  }
}
