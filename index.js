// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Variables para los campos
  const nameForm = document.getElementById('nameForm').value.trim();
  const email = document.getElementById('email').value.trim();
  const reason = document.getElementById('reason').value;
  const sms = document.getElementById('sms').value.trim();
  let valid = true;

  // Limpieza de mensajes de error previos
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => (error.textContent = ''));

  // Validación de campos
  if (nameForm === '') {
    document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
    valid = false;
  }

  if (reason === '') {
    document.getElementById('reasonError').textContent = 'Debe seleccionar un motivo de contacto.';
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.';
    valid = false;
  }

  if (sms === '') {
    document.getElementById('smsError').textContent = 'El mensaje de la consulta es obligatorio.';
    valid = false;
  }

  // Si todos los campos son válidos
  if (valid) {
    alert('Formulario enviado correctamente.');
    document.getElementById('contactForm').reset();
  }
});
