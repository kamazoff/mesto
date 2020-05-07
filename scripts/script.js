const popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.profile__edit-button'),
    popupClose = document.querySelector('.popup__close_button'),
    popupSubmit = document.querySelector('.popup__submit_button'),
    formContainer = document.querySelector('.popup__container'),
    nameInput = document.querySelector('.profile__title'),
    jobInput = document.querySelector('.profile__subtitle'),
    fieldName = document.querySelector('.popup__field_name'),
    fieldAbout = document.querySelector('.popup__field_about'),
    addButton = document.querySelector('.profile__add-button'),
    photos = document.querySelector('.photos'),
    cards = document.querySelector('.popup_type_card'),
    cardsCloseBtn = document.querySelector('#close_card'),
    imgCloseBtn = document.querySelector('#zoom_image_close'),
    zoomPhoto = document.querySelector('.popup__zoom_image'),
    zoomTitle = document.querySelector('.popup__photo-title'),
    formPhotos = document.querySelector('.popup_type_zoom'),
    photoName = document.querySelector('.popup__field_name_card'),
    photoLink = document.querySelector('.popup__field_link_card'),
    newPhotos = document.querySelector('.popup__container_photo');


const initialCards = [ 
        { 
            name: 'Архыз', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
        }, 
        { 
            name: 'Челябинская область', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' 
        }, 
        { 
            name: 'Иваново', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' 
        }, 
        { 
            name: 'Камчатка', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
        }, 
        { 
            name: 'Холмогорский район', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' 
        }, 
        { 
            name: 'Байкал', 
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' 
        } 
      ];     
    
function formOpenClose (form) {
    form.classList.toggle('popup_opened');
}

  // клонирование карточек 
function createCards(title, image) { 
    const photosTemplate = document.querySelector('#photos-template').content; 
    const photosCards =  photosTemplate.cloneNode(true); 
    photosCards.querySelector('.photo__title').textContent = title;
    photosCards.querySelector('.photo__item').alt = title; 
    photosCards.querySelector('.photo__item').src = image; 
    // проставление лайков 
    photosCards.querySelector('.photo__button').addEventListener('click', function (evt) { 
      evt.target.classList.toggle('photo__button_active'); 
    }); 

// удаление карточки 
  photosCards.querySelector('.photo__button_basket').addEventListener('click', function (evt) { 
    evt.target.parentElement.classList.add('photo__button_basket_active'); 
  }); 

  // увеличение карточки 
  photosCards.querySelector('.photo__item').addEventListener('click', function (evt) { 
    formOpenClose(formPhotos); 
    zoomPhoto.src = evt.target.src; 
    zoomPhoto.alt = title;
    zoomTitle.textContent = title; 
  }); 
  return photosCards; 
} 

// карточки из массива  
initialCards.forEach(function (photo) { 
  photos.append(createCards(photo.name, photo.link)); 
}) 

function formSubmitHandler (evt) {
    evt.preventDefault();
    formOpenClose (popup);
    nameInput.textContent = fieldName.value;
    jobInput.textContent = fieldAbout.value;
}

function photoSubmitHandler (evt) {
    evt.preventDefault(); 
    photos.prepend(createCards(photoName.value, photoLink.value)); 
    formOpenClose(cards);
    photoName.value = ''; 
    photoLink.value = ''; 
  } 


function editForm(){
    formOpenClose(popup);
    fieldName.value = nameInput.textContent;
    fieldAbout.value = jobInput.textContent;
  }

popupOpen.addEventListener('click', editForm);

popupSubmit.addEventListener('click', formSubmitHandler);
popupClose.addEventListener('click', () => formOpenClose(popup));
addButton.addEventListener('click', () => formOpenClose(cards)); 
cardsCloseBtn.addEventListener('click', () => formOpenClose(cards));
newPhotos.addEventListener('submit', photoSubmitHandler); 
imgCloseBtn.addEventListener('click', () => formOpenClose(formPhotos)); 
formContainer.addEventListener('submit', formSubmitHandler);
