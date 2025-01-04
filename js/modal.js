(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMobileBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMobileBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    mobile: document.querySelector("[data-menu]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobile.classList.toggle("is-open");
  }
})();
