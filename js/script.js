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

  if (!nombre) {
      document.getElementById('error-firstname').textContent = 'El campo nombre es obligatorio.';
      isValid = false;
  } else if (!validarNombre(nombre)) {
      document.getElementById('error-firstname').textContent = 'Por favor, ingrese un nombre válido.';
      isValid = false;
  }

  if (!email) {
      document.getElementById('error-email').textContent = 'El campo email es obligatorio.';
      isValid = false;
  } else if (!validarEmail(email)) {
      document.getElementById('error-email').textContent = 'Por favor, ingrese un email válido.';
      isValid = false;
  }

  if (!telefono) {
      document.getElementById('error-telefono').textContent = 'El campo teléfono es obligatorio.';
      isValid = false;
  } else if (!validarTelefono(telefono)) {
      document.getElementById('error-telefono').textContent = 'Por favor, ingrese un teléfono válido.';
      isValid = false;
  }

  if (!mensaje) {
      document.getElementById('error-mensaje').textContent = 'El campo mensaje es obligatorio.';
      isValid = false;
  } else if (!validarMensaje(mensaje)) {
      document.getElementById('error-mensaje').textContent = 'Por favor, ingrese un mensaje.';
      isValid = false;
  }

  // Si todos los campos son válidos, enviar el formulario
  if (isValid) {
      alert('Formulario enviado correctamente!');
      this.reset(); // Resetear el formulario
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

