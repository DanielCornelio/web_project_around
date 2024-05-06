import { handleEscPress, imagePopup } from "../utils/utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    const templateNode = template.content.querySelector(".card");
    const cardNode = templateNode.cloneNode(true);

    cardNode.querySelector(".card__image").src = this._link;
    cardNode.querySelector(".card__image").alt = "Imagen de " + this._name;
    cardNode.querySelector(".card__title").textContent = this._name;
    cardNode.querySelector(".card__delete").addEventListener("click", () => {
      cardNode.remove();
    });

    return cardNode;
  }
  _setEventListeners(cardNode) {
    const likeButton = cardNode.querySelector(".card__like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like_active");
    });

    cardNode.querySelector(".card__image").addEventListener("click", () => {
      imagePopup.classList.add("popup_opened");
      document.addEventListener("keydown", handleEscPress);
      imagePopup.querySelector(".popup__image").src = this._link;
      imagePopup.querySelector(".popup__image-title").textContent = this._name;
      imagePopup.querySelector(".popup__image").alt = this._name;
    });
  }

  render() {
    const node = this._getTemplate();
    this._setEventListeners(node);
    return node;
  }
}
