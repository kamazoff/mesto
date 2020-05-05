const popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.profile__edit_button'),
    popupClose = document.querySelector('.popup__close_button'),
    popupSubmit = document.querySelector('.popup__submit_button'),
    formElement = document.querySelector('.popup__form'),
    nameInput = document.querySelector('.profile__title'),
    jobInput = document.querySelector('.profile__subtitle'),
    fieldName = document.querySelector('.popup__field_name'),
    fieldAbout = document.querySelector('.popup__field_about'),
    popupAddPhoto = document.querySelector('.profile__add_button'),
    photoItem = document.querySelector('.photo__item'),
    popupContainer = document.querySelector('.popup__container'),
    popupContainerPhoto = document.querySelector('.popup__container_photo'),
    popupAddCard = document.querySelector('.popup__add_card'),
    photos = document.querySelector('.photos'),
    nameCard = document.querySelector('.popup__field_name_card'),
    linkCard = document.querySelector('.popup__field_link_card'),
    popupImg = document.querySelector('.popup__form_image');

    
    /*const initialCards = [
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
    ];*/
    function togglePopup(form) {
        form.classList.toggle('popup_opened');
    }    

/*// клонирование карточек // 
function createCards(title, image) { 
    const photosTemplate = document.querySelector('#photos-template').content; 
    const elementsCards =  photosTemplate.cloneNode(true); 
    elementsCards.querySelector('.photo__title').textContent = title;
    elementsCards.querySelector('.photo__item').alt = title; 
    elementsCards.querySelector('.photo__item').src = image; 
    // ставить лайки // 
    elementsCards.querySelector('.photo__button').addEventListener('click', function (evt) { 
      evt.target.classList.toggle('photo__button_active'); 
    }); 
    // удалять карточки // 
    elementsCards.querySelector('.photo__button_basket').addEventListener('click', function (evt) { 
      evt.target.parentElement.classList.add('photo__button_basket_active'); 
    }); 
    elementsCards.querySelector('.photo__image').addEventListener('click', function (evt) { 
      togglePopup(zoom); 
      zoomImage.src = evt.target.src; 
      zoomImage.alt = title;
      zoomTitle.textContent = title; 
    }); 
    return elementsCards; 
  } 

// карточки из массива // 
initialCards.forEach(function (card) { 
    photos.append(createCards(card.name, card.link)); 
});
*/


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = fieldName.value;
    jobInput.textContent = fieldAbout.value;
        togglePopup(popup);
}
/*// добавления новых карточек // 
function cardSubmitHandler (evt) { 
    evt.preventDefault(); 
    elements.prepend(createCards(nameCard.value, linkCard.value)); 
    togglePopup(photos); 
    nameCard.value = ''; 
    linkCard.value = ''; 
  } */
  function editForm() {
    togglePopup(popup);
    nameInput.value = nameInput.textContent; 
    jobInput.value = jobInput.textContent; 
      }

popupOpen.addEventListener('click', editForm);
popupAddPhoto.addEventListener('click', () => togglePopup(photos)); 
popupSubmit.addEventListener('click', formSubmitHandler);

popupClose.addEventListener('click', () => togglePopup(popup));