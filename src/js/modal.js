(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeElements: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector(".modal-overlay"),
  };


    // Перебираем все элементы с data-modal-close и вешаем на них обработчик
    
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeElements.forEach(element => {
    element.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
