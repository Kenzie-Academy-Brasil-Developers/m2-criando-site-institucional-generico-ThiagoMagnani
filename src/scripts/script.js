function modalContainer(){
    const button = document.querySelector(".buttonHeader");
    const modalContainer = document.querySelector(".modalContainer");

    button.addEventListener('click', () => {
        modalContainer.showModal();
        closeModal();
    });
}
modalContainer();

function closeModal(){
    const button = document.querySelector('.buttonCloseModal');
    const modalContainer = document.querySelector('.modalContainer');

    button.addEventListener('click', () => {
        modalContainer.close();
    });
}