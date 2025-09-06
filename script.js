// Seleccionamos el formulario y el elemento donde se mostrará el mensaje
const form = document.querySelector('.form-registro');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que se recargue la página

  // Aquí podrías agregar código para enviar los datos a un servidor si quieres

  // Mostrar el mensaje de éxito
  respuesta.textContent = "✅ Su Registro se Guardó Correctamente";

  // Opcional: limpiar el formulario después de registrar
  form.reset();

  // Opcional: desaparecer el mensaje después de unos segundos
  setTimeout(() => {
    respuesta.textContent = '';
  }, 5000);
});
