const popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.profile__edit_button'),
    popupClose = document.querySelector('.popup__close_button'),
    popupSubmit = document.querySelector('.popup__submit_button'),
    formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.profile__title'),
    jobInput = document.querySelector('.profile__subtitle'),
    fieldName = document.querySelector('.popup__field_name'),
    fieldAbout = document.querySelector('.popup__field_about');

    
function formOpenClose (evt) {
    popup.classList.add('popup__opened');
    
    
    if (popup.classList.contains('popup__opened')){
        fieldName.value = nameInput.textContent;
    fieldAbout.value = jobInput.textContent;
        
}else {
    nameInput.textContent = fieldName.value;
        jobInput.textContent = fieldAbout.value;   
    
}
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    popup.classList.remove('popup__opened');
    nameInput.textContent = fieldName.value;
        jobInput.textContent = fieldAbout.value;
}

popupOpen.addEventListener('click', formOpenClose);

popupSubmit.addEventListener('click', formSubmitHandler);
popupClose.addEventListener('click', formOpenClose);
