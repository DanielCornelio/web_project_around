// Busquemos el formulario en el DOM
let coverProfile = document.querySelector(".popup_profile");
let coverNewPlace = document.querySelector(".popup_new-place");
let formElement = document.querySelector(".popup__container");
// let formElementNewPlace = document.querySelector(".popup__container");
let showModal = document.querySelector(".profile__edit-button");
let showModalNewPlace = document.querySelector(".profile__add-button");
let closeModal = document.querySelector(".popup__close");
let closeModalNewPlace = document.querySelector("#closeNP");
let profileName = document.querySelector(".profile__name");
let nameInput = document.querySelector(".popup__input_name");
let profileJob = document.querySelector(".profile__job");
let jobInput = document.querySelector(".popup__input_job");

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

function handleCloseModal(evt) {
  evt.preventDefault();
  coverProfile.classList.remove("popup_opened");
}
function handleCloseModalNewPlace(evt) {
  evt.preventDefault();
  coverNewPlace.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  coverProfile.classList.remove("popup_opened");
}
function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  coverProfile.classList.remove("popup_opened");
}

showModal.addEventListener("click", handleShowModal);
showModalNewPlace.addEventListener("click", handleShowModalNewPlace);

closeModal.addEventListener("click", handleCloseModal);
closeModalNewPlace.addEventListener("click", handleCloseModalNewPlace);

formElement.addEventListener("submit", handleProfileFormSubmit);
// formElementNewPlace.addEventListener("submit", handleNewPlaceFormSubmit);
