const modalPayment = document.querySelector(".modal-container");
const watchButton = document.querySelector(".watch-button");
const modalInfo = document.querySelector(".modal__info");
const cancelButton = document.querySelector(".cancel");
console.log(cancelButton);

watchButton.addEventListener('click', () => {
    modalPayment.classList.add('modal-container--active');
    modalInfo.classList.add('modal__info--active');
})

cancelButton.addEventListener('click', () => {
    modalInfo.classList.remove('modal__info--active');
    modalInfo.classList.add('modal__info--hide');
    setTimeout(() => {modalInfo.classList.remove('modal__info--hide');}, 1500);
    modalPayment.classList.remove('modal-container--active');
    modalPayment.classList.add('modal-container--hide');
    setTimeout(() => {modalPayment.classList.remove('modal-container--hide');}, 3000);
    
})