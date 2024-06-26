export default class Card {
  constructor(name, link, templateSelector, { handleClick }) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleClick = handleClick;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    const templateNode = template.content.querySelector(".element");
    const cardNode = templateNode.cloneNode(true);

    cardNode.querySelector(".element__image").src = this._link;
    cardNode.querySelector(".element__image").alt = "Imagen de " + this._name;
    cardNode.querySelector(".element__text").textContent = this._name;
    cardNode
      .querySelector(".element__button-trash")
      .addEventListener("click", () => {
        cardNode.remove();
      });

    return cardNode;
  }

  _setEventListeners(cardNode) {
    const likeButton = cardNode.querySelector(".element__button-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__button-like_active");
    });

    cardNode.querySelector(".element__image").addEventListener("click", () => {
      this._handleClick(this._name, this._link);
    });
  }

  render() {
    const node = this._getTemplate();
    this._setEventListeners(node);
    return node;
  }
}