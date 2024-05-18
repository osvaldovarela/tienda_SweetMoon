const form = document.querySelector(".form");
const submitButton = form.querySelector("#submit");

//lista de posibles errores en la verificacion
const arrayErrors = [
  {
    error: 1,
    name: "ename",
    mensaje: "El campo nombre está vacío o es muy corto.",
  },
  {
    error: 2,
    name: "ephone",
    mensaje: "El campo teléfono está vacío.",
  },
  {
    error: 3,
    name: "eemail",
    mensaje: "El campo email está vacío o tiene un formato inválido.",
  },
  {
    error: 4,
    name: "emensaje",
    mensaje: "El campo mensaje está vacío o es muy corto.",
  },
  {
    error: 5,
    name: "efile",
    mensaje: "No se ha agregado ninguna imagen.",
  },
  {
    error: 6,
    name: "eextension",
    mensaje:
      "El archivo no es de una extensión válida. Por favor, seleccione otro archivo.",
  },
];

//array de errores para luego indicar
let errores = [];

/********* Comienza de funcion para comprobar extension del archivo *********/
//creo variable de expresion regular para mail
const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//creo un array que contiene las extensiones validas para una imagen
const extensiones_validas = new Array("jpg", "jpeg", "png", "svg");

function checkExtension() {
  //traigo el elemento archivo dell form
  const fileInput = form.querySelector("#fileImage");

  //compruebo si realmente se agrego algun elemento
  if (fileInput.files.length <= 0) {
    errores.push("efile");
  } else {
    //selecciono el primero de los elementos file agregados - por las dudas que haya mas
    let fileImagen = fileInput.files[0];
    console.log(fileImagen.name);
    //separa del nombre la seccion de extension
    let extension = fileImagen.name.split(".").pop().toLowerCase();
    console.log(extension);
    //comprueba si esta en la lista de extensiones aceptadas como imagen
    if (!extensiones_validas.includes(extension)) {
      errores.push("eextension");
    }
  }
}
/*********  Fin de funcion para comprobar extension del archivo  *********/

/********* Comienza la escucha del evento de envio del formulario *********/
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  errores = [];
  //constantes que obtienen valores del formulario
  const nombre = form.querySelector("#firstname").value.trim();
  const telefono = form.querySelector("#telefono").value.trim();
  const mensaje = form.querySelector("#mensaje").value.trim();
  const mail = form.querySelector("#email").value.trim();
  const modal = form.querySelector("#myModal");

  modal.innerHTML = "";
  const divError = document.createElement("div");

  //comprobamos si campo nombre muy corto
  if (nombre.length < 3) {
    errores.push("ename");
    //comprobamos si el email tiene formato correcto
  }
  if (telefono.length < 6) {
    errores.push("ephone");

    //comprobamos si el email tiene formato correcto
  }
  if (!regExp.test(mail)) {
    errores.push("eemail");
  }
  //comprobamos minimo de caracteres en mensaje (ejemplo: permite un msj tipo "info")
  if (mensaje.length < 4) {
    errores.push("emensaje");
  }

  //llama a la funcion que comprueba extension
  checkExtension();

  //reviso el array de errores para comprobar si los hubo
  if (errores.length === 0) {
    //todo OK
    const h2 = document.createElement("h2");
    h2.textContent = "El formulario se ha enviado correctamente!";
    modal.appendChild(h2);
    modal.style.display = "block";
    //creamos el modal que muestra mensaje de todo ok
    const closeModal = document.createElement("button");

    closeModal.setAttribute("id", "btn-cerrar-modal");
    closeModal.setAttribute("type", "button");
    closeModal.textContent = "Cerrar";

    modal.appendChild(closeModal);
    closeModal.disabled = false;

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // alert("Su formulario ha sido enviado exitosamente.");
    form.reset();
  } else {
    // Limpiar cualquier mensaje de error anterior
    divError.innerHTML = "";
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.textContent = "El formulario no pudo ser enviado.";
    h2.textContent = "Por favor, revise las siguientes indicaciones: ";
    modal.appendChild(h1);
    modal.appendChild(h2);

    errores.forEach((error) => {
      const pError = document.createElement("p");
      let objError = arrayErrors.find((obj) => {
        return obj.name === error;
      });
      if (objError) {
        pError.textContent = "\u2022 " + objError.mensaje;
        divError.appendChild(pError);
        modal.appendChild(divError);
      }
    });
    console.log(errores);

    //aqui muestro el modal si hay errores
    modal.style.display = "block";
    const closeModal = document.createElement("button");

    closeModal.setAttribute("id", "btn-cerrar-modal");
    closeModal.setAttribute("type", "button");
    closeModal.textContent = "Cerrar";

    modal.appendChild(closeModal);
    closeModal.disabled = false;

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});
