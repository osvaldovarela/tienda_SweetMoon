const form = document.querySelector(".form");

//creo variable de expresion regular para mail
const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let msjerror = "";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //constantes que obtienen valores del formulario
  const nombre = document.querySelector("#firstname").value.trim();
  const mensaje = document.querySelector("#mensaje").value.trim();
  const mail = document.querySelector("#email").value.trim();
  if ((nombre === "" && nombre.length < 3) || mensaje === "" || mail === "") {
    msjerror = "Hay campos obligatorios vacíos.";

    //comprobamos si el email tiene formato correcto
  } else if (!regExp.test(mail)) {
    msjerror =
      "Ingrese un formato de email válido. \nEjemplo: ejemplo@mail.com";
  } else {
    //todo OK
    msjerror = "Su formulario ha sido enviado exitosamente.";
    form.reset();
  }

  alert(msjerror);
});
