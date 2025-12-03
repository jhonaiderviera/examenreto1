document.addEventListener("DOMContentLoaded", () => {
  const alreadyRegisteredOption = document.getElementById("already-registered");
  const notRegisteredOption = document.getElementById("not-registered");
  const formRegistered = document.getElementById("form-registered");
  const formRegister = document.getElementById("form-register");
  const cancelButton = document.getElementById("cancel");

  const hideForms = () => {
    formRegistered.style.display = "none";
    formRegister.style.display = "none";
  };

  const showForm = (formElement, displayType) => {
    hideForms();
    formElement.style.display = displayType;
  };

  hideForms();

  alreadyRegisteredOption.addEventListener("click", () => {
    showForm(formRegistered, "grid");
  });

  notRegisteredOption.addEventListener("click", () => {
    showForm(formRegister, "flex");
  });

  cancelButton.addEventListener("click", () => {
    hideForms();
  });

  formRegistered.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Enviando correo de acceso!");
  });

  formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Enviando correo de registro!");
  });
});
