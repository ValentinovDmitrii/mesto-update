import './pages/index.css';

import{enableValidation} from './components/validate.js'
import{closePopupByOverlay, openPopup, closePopup} from './components/modal.js';
import{handleProfileFormSubmit} from './components/utils.js';
import{initialCards, addCard} from './components/card.js';


export const sectionProfile = document.querySelector('.profile'); //секция profile
export const profileName = sectionProfile.querySelector('.profile__name'); //имя профиля
export const profileDescription = sectionProfile.querySelector('.profile__description'); //информация о себе
export const profileEditButton = sectionProfile.querySelector('.profile__edit-button'); //кнопка редактирования профиля

export const popupEditProfile = document.querySelector('.popup_type_editProfile'); //модальное окно (редактировать профиль)
export const formElementEditProfile = popupEditProfile.querySelector('#editProfileFormPopup'); //форма (редактировать профиль)
export const nameInput = popupEditProfile.querySelector('#profile-name-input'); //поле ввода имени профиля
export const jobInput = popupEditProfile.querySelector('#description-input'); //поле ввода информации о себе

export const popupAddCard = document.querySelector('.popup_type_addCard'); //модальное окно (добавить карточку)
export const buttonAddCard = sectionProfile.querySelector('.profile__add-button'); //кнопка добавить карточку
export const cardNameInput = popupAddCard.querySelector('#card-name-input'); //поле ввода названия карточки
export const cardUrlInput = popupAddCard.querySelector('#card-url-input'); //поле ввода ссылки на карточку
export const formElementAddCard = popupAddCard.querySelector('#cardFormPopup');//форма (добавить карточку)

export const elementsContainer = document.querySelector('.elements-container'); //контейнер для карточек
export const cardTemplate = document.querySelector('#cardTemplate').content; //шаблон карточки

export const popupImagePreview = document.querySelector('.popup_type_image-preview');// модальное окно (увеличить изображение карточки)

export const bigImageName = document.querySelector('.popup__image-name'); //название большого изображения
export const imageUrl = document.querySelector('.popup__image'); //ссылка на большое изображение

export const formElement = document.querySelector('.popup__form'); //элемент формы
export const inputElement = formElement.querySelector('.popup__input'); //элемент поля ввода

export const page = document.querySelector('.page'); //элемент body




initialCards.forEach(function(item) {
    addCard(item, elementsContainer);
});

//функция создать новую карточку 
formElementAddCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const cardData = {
        name: cardNameInput.value,
        link: cardUrlInput.value
    }

    formElementAddCard.reset();

    addCard(cardData, elementsContainer);
    closePopup(popupAddCard)
});

//открытие модального окна (редактировать профиль)
profileEditButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
});

//открытие модального окна (добавить карточку)
buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
}) 

//слушатель - закрыть модальное окно кликом на фон
page.addEventListener('click', function(e) {
    closePopupByOverlay(e);
});

//слушатель на форме редактировать профиль
formElementEditProfile.addEventListener('submit', handleProfileFormSubmit);


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});