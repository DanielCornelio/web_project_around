// Busquemos el formulario en el DOM
let coverProfile = document.querySelector(".popup_profile");
let coverNewPlace = document.querySelector(".popup_new-place");
let formElement = document.querySelector(".popup__container");
let formElementNewPlace = document.querySelector(".popup__container");
let showModal = document.querySelector(".profile__edit-button");
let showModalNewPlace = document.querySelector(".profile__add-button");
let closeModal = document.querySelector(".popup__close");
let closeModalNewPlace = document.querySelector("#closeNP");
let profileName = document.querySelector(".profile__name");
let nameInput = document.querySelector(".popup__input_name");
let profileJob = document.querySelector(".profile__job");
let jobInput = document.querySelector(".popup__input_job");

const templateCard = document.querySelector("#template-card");
const cardArea = document.querySelector(".elements");
const overlayImage = document.querySelector("#popup-overlay-image");

//Popup imagenes
const popupImageOpen = document.querySelector("#popup_image-open");
const closeImage = document.querySelector("#popup__close-image");
const popupImageTitle = document.querySelector(".popup__image-title");
const popupImage = document.querySelector(".popup__image");

const titleInput = document.querySelector(".popup__input_title");
const imageInput = document.querySelector(".popup__input_link");


const initialCards = [
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


//Template cards
function cardGenerator(title, link) {
  const card = templateCard.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const likeButton = card.querySelector(".card__like");
  const deleteButton = card.querySelector(".card__delete");
  cardImage.src = link;
  cardTitle.textContent = title;
  cardImage.alt = title;
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like_active");
  });
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    handleOpenImage(title, link);
  });
  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});


function handleOpenImage(title, link){
  popupImage.src = link;
  popupImage.alt = title;
  popupImageTitle.textContent = title;
  popupImageOpen.classList.add("popup_opened");
  closeImage.addEventListener("click", handleCloseImage);
  overlayImage.addEventListener("click", handleOverlayClick);
}
function handleCloseImage() {
  popupImageOpen.classList.remove("popup_opened");
  overlayImage.removeEventListener("click", handleOverlayClick);
}
function handleOverlayClick(event) {
  if (event.target.classList.contains("popup__overlay")) {
    closePopup();
    closeAddImagePopup();
    handleCloseImage();
  }
}



function handleShowModal(evt) {
  evt.preventDefault();
  coverProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


function handleShowModalNewPlace(evt) {
  evt.preventDefault();
  coverNewPlace.classList.add("popup_opened");
}

function handleAddImageFormSubmit(evt) {
  evt.preventDefault();
  const newImageTitle = titleInput.value;
  const newImageUrl = imageInput.value;
  coverNewPlace.classList.remove("popup_opened");


}


function handleAddCardSubmit(evt) {
  evt.preventDefault();
  if (evt.submitter.classList.contains("popup__button")) {
    const newCard = cardGenerator(titleInput.value, imageInput.value);
    cardArea.prepend(newCard);
  }
  coverNewPlace.classList.remove("popup_opened");


}
function handleCloseModalNewPlace(evt) {
  coverNewPlace.classList.remove("popup_opened");
}


function handleCloseModal(evt) {
  coverProfile.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  coverProfile.classList.remove("popup_opened");
}

function closeWithEsc(event) {
  if (event.key === "Escape") {
    handleCloseModal();
    handleCloseModalNewPlace();
    handleCloseImage();
  }

}

function handleOverlayClick(event) {
  if (event.target.classList.contains("popup_opened")) {
    handleCloseModal();
    handleCloseModalNewPlace();
    handleCloseImage();
  }
  document.removeEventListener("keydown", closeWithEsc);

}


showModal.addEventListener("click", handleShowModal);
showModalNewPlace.addEventListener("click", handleShowModalNewPlace);

closeModal.addEventListener("click", handleCloseModal);
closeModalNewPlace.addEventListener("click", handleCloseModalNewPlace);

formElement.addEventListener("submit", handleProfileFormSubmit);
formElementNewPlace.addEventListener("submit", handleAddImageFormSubmit);

coverNewPlace.addEventListener("submit", handleAddCardSubmit);
document.addEventListener("keydown", closeWithEsc);

coverProfile.addEventListener("click", handleOverlayClick)
coverNewPlace.addEventListener("click", handleOverlayClick)
popupImageOpen.addEventListener("click", handleOverlayClick)