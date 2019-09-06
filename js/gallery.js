const gallery = document.querySelector(`.gallery-container`);
const backBtn = gallery.querySelector(`.gallery-button-back`);
const nextBtn = gallery.querySelector(`.gallery-button-next`);
const contentBlock = gallery.querySelector(`.gallery-content`);

let currentSlide = null;
let currentSlideIndex = null;

const PHOTOS = [
  {
  	id: 101,
  	title: `Интерьер первого зала`,
  	img: `salon-1.jpg`,
  	href: `#`
  },
  {
  	id: 102,
  	title: `Интерьер второго зала`,
  	img: `salon-2.jpg`,
  	href: `#`
  },
  {
  	id: 103,
  	title: `Клиент с фирменным пивом`,
  	img: `salon-3.jpg`,
  	href: `#`
  },
  {
  	id: 104,
  	title: `Мастер за работой`,
  	img: `salon-4.jpg`,
  	href: `#`
  },
  {
  	id: 105,
  	title: `Инструменты`,
  	img: `salon-5.jpg`,
  	href: `#`
  }
];

// Рендеринг элемента из разметки
const createElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

const getSlide = ({id, title, img, href}) => {
  return `<a class="gallery-photo-link" id="${id}" href="${href}">
    <img class="gallery-foto" src="img/${img}" width="286" height="164" alt="${title}">
  </a>`.trim();
};

// Отрисовка слайда
const renderSlide = (block, el) => {
  block.innerHTML = ``;
  block.appendChild(el);
};

const showSlide = (slideData) => {
  const slideEl = createElement(getSlide(slideData));
  currentSlide = slideEl;
  renderSlide(contentBlock, slideEl);
};

// Перключение слайдов
const changeSlide = (button) => {
  if (button === backBtn) {
    currentSlideIndex--;
    if (currentSlideIndex === 0) {
      backBtn.disabled = `disabled`;
    }
  } else {
    currentSlideIndex++;
    if (currentSlideIndex === PHOTOS.length - 1) {
      nextBtn.disabled = `disabled`;
    }
  }
  const nextSlideData = PHOTOS[currentSlideIndex];
  showSlide(nextSlideData);
};

// Обработчик нажатия на кнопку "Вперёд"
const nextBtnClickHandler = (evt) => {
  evt.preventDefault();

  // Разлочиваем кнопку "Назад"
  if (backBtn.disabled) {
    backBtn.disabled = ``;
  }
  changeSlide (evt.target);
};

// Обработчик нажатия на кнопку "Назад"
const backBtnClickHandler = (evt) => {
  evt.preventDefault();
  if (nextBtn.disabled) {
    nextBtn.disabled = ``;
  }
  changeSlide (evt.target);
};

backBtn.addEventListener(`click`, backBtnClickHandler);
nextBtn.addEventListener(`click`, nextBtnClickHandler);

// Стартовая отрисовка слайдера
const initSlider = () => {
  const slideEl = createElement(getSlide(PHOTOS[0]));
  currentSlide = slideEl;
  currentSlideIndex = 0; // индекс в лоб
  renderSlide(contentBlock, slideEl);
  backBtn.disabled = `disabled`;
  nextBtn.disabled = ``;
};

initSlider();
