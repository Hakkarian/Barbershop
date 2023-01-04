const openButton = document.querySelector('.modal-open');
const closeButton = document.querySelector('.modal-close');
const backdrop = document.querySelector('.backdrop');

const onOpen = () => {
    backdrop.classList.remove('is-hidden');
}
const onClose = () => {
    backdrop.classList.add('is-hidden');
}
openButton.addEventListener('click', onOpen);
closeButton.addEventListener('click', onClose);