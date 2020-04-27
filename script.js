let popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.button__edit'),
    popupClose = document.querySelector('.button__close'),
    popupSubmit = document.querySelector('.button__submit'),
    fieldName = document.querySelector('.popup__field-name'),
    fieldAbout = document.querySelector('.popup__field-about'),
    formElement = document.querySelector('.popup__form'),
    nameInput = document.querySelector('.profile__title'),
    jobInput = document.querySelector('.profile__subtitle');

function formOpenClose (evt) {
    popup.classList.remove('popup__opened');
    
    
    if (popup.classList.contains('popup__opened')){
        
        nameInput.textContent = fieldName.value;
        jobInput.textContent = fieldAbout.value;   
    
}else {
    fieldName.value = nameInput.textContent;
    fieldAbout.value = jobInput.textContent;
}
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    popup.classList.add('popup__opened');
    nameInput.textContent = fieldName.value;
        jobInput.textContent = fieldAbout.value;
}

popupOpen.addEventListener('click', formOpenClose);

popupSubmit.addEventListener('click', formSubmitHandler);
popupClose.addEventListener('click', formOpenClose);
