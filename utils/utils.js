import Card from "../utils/Card.js";
// Profile
export const openEditButton = document.querySelector(".profile__edit-button");
export const openProfileButton = document.querySelector(".profile__add-button");

export const popupProfile = document.querySelector(".popup_profile");
export const popupPlace = document.querySelector(".popup_new-place");
export const popupCloseIcon = document.querySelectorAll(".popup__close");
export const formElement = document.querySelector(".popup__form");

export const profileTitle = document.querySelector(".profile__name");
export const profileText = document.querySelector(".profile__job");

export const nameInput = formElement.querySelector(".popup__input_name");
export const aboutMeInput = formElement.querySelector(".popup__input_job");

export const placeInput = popupPlace.querySelector(".popup__input_title");
export const linkInput = popupPlace.querySelector(".popup__input_link");

export const elementsArea = document.querySelector(".elements");

export const deleteCard = document.querySelector(".card__delete");

export const imagePopup = document.querySelector("#popup_image-open");

export const popupOverlays = document.querySelectorAll(".popup__overlay");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_has_error",
  errorClass: "popup__error",
};

export function closeAllModal() {
  popupProfile.classList.remove("popup_opened");
  popupPlace.classList.remove("popup_opened");
  imagePopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscPress);
}

export function handleEscPress(evt) {
  if (evt.key === "Escape") {
    closeAllModal();
  }
}

export function createCard(name, link) {
  return new Card(name, link, "#template-card").render();
}

export function handleAddCard(evt) {
  evt.preventDefault();
  const cardNode = createCard(placeInput.value, linkInput.value);
  elementsArea.prepend(cardNode);
  closeAllModal();

  placeInput.value = "";
  linkInput.value = "";
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  closeAllModal();
}
