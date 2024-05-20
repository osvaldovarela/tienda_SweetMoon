/*let envio = [];

const form = document.querySelector(".form");
const nombre = document.querySelector("#firstname");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = firstname.value.trim();

  if (title.length >= 3) {
    
    const task = {
      id: Date.now(),
      title,
      complete: false,
    };

    envio.push(task);


    firstname.value = "";

 
  } else {
    const error = document.querySelector(".error");
    error.textContent = "Debe ingresar 3 caracteres o mas";

    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }
});*/

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Borrar mensajes de error previos
  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  // Obtener los valores de los campos
  const nombre = document.getElementById('firstname').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validación de cada campo
  let isValid = true;

  if (!validarNombre(nombre)) {
      document.getElementById('error-firstname').textContent = 'Por favor, ingrese un nombre válido.';
      isValid = false;
  }

  if (!validarEmail(email)) {
      document.getElementById('error-email').textContent = 'Por favor, ingrese un email válido.';
      isValid = false;
  }

  if (!validarTelefono(telefono)) {
      document.getElementById('error-telefono').textContent = 'Por favor, ingrese un teléfono válido.';
      isValid = false;
  }

  if (!validarMensaje(mensaje)) {
      document.getElementById('error-mensaje').textContent = 'Por favor, ingrese un mensaje.';
      isValid = false;
  }

  // Si todos los campos son válidos, enviar el formulario
  if (isValid) {
      alert('Formulario enviado correctamente!');
      this.submit();
  }
});

// Función para validar el nombre (no vacío y sin caracteres especiales)
function validarNombre(nombre) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(nombre);
}

// Función para validar el email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para validar el teléfono (solo números)
function validarTelefono(telefono) {
  const regex = /^[0-9]+$/;
  return regex.test(telefono);
}

// Función para validar el mensaje (no vacío)
function validarMensaje(mensaje) {
  return mensaje.length > 0;
}
