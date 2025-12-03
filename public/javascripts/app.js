// Código de cliente para manipulación del DOM
document.addEventListener('DOMContentLoaded', () => {
  const alreadyRegistered = document.getElementById("already-registered");
  const notRegistered = document.getElementById("not-registered");

  const formRegistered = document.getElementById("form-registered");
  const formRegister = document.getElementById("form-register");

  const cancelButton = document.getElementById("cancel");

  alreadyRegistered.addEventListener("click", () => {
    formRegistered.classList.add("show-form");
    formRegister.classList.remove("show-form");
  });

  notRegistered.addEventListener("click", () => {
    formRegister.classList.add("show-form");
    formRegistered.classList.remove("show-form");
  });

  cancelButton.addEventListener("click", () => {
    formRegistered.classList.remove("show-form");
  });
});
