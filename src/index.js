import "./styles/index.css";

import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import FormValidator from "./scripts/FormValidator.js";
import {
  createCard,
  openEditButton,
  openAddButton,
  popupCloseIcon,
  formElement,
  profileText,
  profileTitle,
  popupPlace,
  initialCards,
  popupOverlays,
  closeAllModal,
  handleAddCard,
  handleProfileFormSubmit,
  formConfig,
  handleEscPress,
  aboutMeInput,
  nameInput,
  elementsArea,
  placeInput,
  linkInput,
} from "./scripts/utils.js";

import UserInfo from "./scripts/UserInfo.js";

const formValidatorProfile = new FormValidator(formElement, formConfig);
const formValidatorAddCard = new FormValidator(popupPlace, formConfig);
const userObjet = { name: ".profile__title", about: ".profile__text" };
const userInfo = new UserInfo(userObjet);
const popupProfile = new PopupWithForm(".popup_profile", ({ name, about }) => {
  userInfo.setUserInfo(name, about);
  popupProfile.close();
});
const popupAddCard = new PopupWithForm(".popup_place", ({ link, place }) => {
  const cardNode = createCard(place, link, popupImage);
  elementsArea.prepend(cardNode);
  popupAddCard.close();
});

const popupImage = new PopupWithImage("#image-popup");

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardNode = createCard(item.name, item.link, popupImage);
      return cardNode;
    },
  },
  ".elements"
);
section.renderer();

openAddButton.addEventListener("click", function () {
  popupAddCard.open();
});

openEditButton.addEventListener("click", function () {
  popupProfile.open();
  aboutMeInput.value = profileText.textContent;
  nameInput.value = profileTitle.textContent;
});

formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();