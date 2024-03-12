// Busquemos el formulario en el DOM
let formElement = document.querySelector(".popup__container");
let showModal = document.querySelector(".profile__edit-button");
let closeModal = document.querySelector(".popup__close");
function handleShowModal(evt) {
  //prevenimos el refresh
  evt.preventDefault();
  //definimos variables asignandole los elementos que emplearemos
  let cover = document.querySelector(".popup");

  let profileName = document.querySelector(".profile__name");
  let profileJob = document.querySelector(".profile__job");

  let nameInput = document.querySelector(".popup__input_title");
  let jobInput = document.querySelector(".popup__input_link");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  cover.classList.add("popup_opened");

  console.log("showModal");
}

function handleCloseModal(evt) {
  //prevenimos el refresh
  evt.preventDefault();
  //definimos variables asignandole los elementos que emplearemos
  let cover = document.querySelector(".popup");

  cover.classList.remove("popup_opened");

  console.log("removeModal");
}

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM
  let nameInput = formElement.querySelector(".popup__input_title");
  let jobInput = formElement.querySelector(".popup__input_link");

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  nameInput.value;
  jobInput.value;
  console.log(nameInput.value);
  console.log(jobInput.value);

  // Selecciona los elementos donde se introducirán los valores de los campos
  let profileName = document.querySelector(".profile__name");
  let profileJob = document.querySelector(".profile__job");

  // Inserta nuevos valores utilizando el textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  let cover = document.querySelector(".popup");

  cover.classList.remove("popup_opened");

  // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
showModal.addEventListener("click", handleShowModal);
closeModal.addEventListener("click", handleCloseModal);

formElement.addEventListener("submit", handleProfileFormSubmit);
