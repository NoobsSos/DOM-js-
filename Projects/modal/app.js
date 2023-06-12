// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

const openModal = () => {
    modal.classList.add('open-modal')
}

const closeModal = () => {
    modal.classList.remove('open-modal')
}

const handleClickOutsideModal = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', handleClickOutsideModal);
