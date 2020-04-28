const popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.profile__edit_button'),
    popupClose = document.querySelector('.popup__close_button'),
    popupSubmit = document.querySelector('.popup__submit_button'),
    formElement = document.querySelector('.popup__form'),
    nameInput = document.querySelector('.profile__title');
    jobInput = document.querySelector('.profile__subtitle'),
    fieldName = document.querySelector('.popup__field_name'),
    fieldAbout = document.querySelector('.popup__field_about');

    
function formOpenClose () {
    popup.classList.toggle('popup_opened');
    
    
    if (popup.classList.contains('popup_opened')) {
        fieldName.value = nameInput.textContent;
    fieldAbout.value = jobInput.textContent;
        
    }else {
    nameInput.value = nameInput.textContent;
        jobInput.value = jobInput.textContent;   
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    formOpenClose ();
    nameInput.textContent = fieldName.value;
        jobInput.textContent = fieldAbout.value;
}

popupOpen.addEventListener('click', formOpenClose);

popupSubmit.addEventListener('click', formSubmitHandler);
popupClose.addEventListener('click', formOpenClose);
