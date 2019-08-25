const loginLink = document.querySelector(`.login-link`);
const loginPopup = document.querySelector(`.modal-login`);
const loginClose = loginPopup.querySelector(`.modal-close`);
const loginSubmit = loginPopup.querySelector(`.login-submit`);

const loginForm = loginPopup.querySelector(`.login-form`);

const loginField = loginForm.querySelector(`#user-login`);
const passwordField = loginForm.querySelector(`#user-password`);
const rememberCheck = loginForm.querySelector(`.login-checkbox input`);
const restoreLink = loginForm.querySelector(`.restore`);

let isStorageSupport = true;
let storage = ``;

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
}

// Закрытие окна логина
const loginCloseClickHandler = (evt) => {
  evt.preventDefault();
  loginPopup.classList.remove(`modal-show`);
};

// Обработчик клика по кнопке входа
const loginLinkClickHandler = (evt) => {
  evt.preventDefault();
  loginPopup.classList.add(`modal-show`);

  if (storage) {
    loginField.value = storage;
    passwordField.focus();
  } else {
    loginField.focus();
  }
};

// Обработчик сабмита формы
const loginFormSubmitHandler = (evt) => {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log(`Нужно ввести логин и пароль`);
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`login`, loginField.value);
    }
    // loginPopup.classList.remove(`modal-show`);
  }
};

window.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains(`modal-show`)) {
      loginPopup.classList.remove(`modal-show`);
    }
  }
});

loginForm.addEventListener(`submit`, loginFormSubmitHandler);

loginClose.addEventListener(`click`, loginCloseClickHandler);
loginLink.addEventListener(`click`, loginLinkClickHandler);

