<!-- Script para insertar citas en la tabla -->
<script>
  const form = document.getElementById('citaForm');
  const tabla = document.getElementById('tablaCitas');
  const mensajeExito = document.getElementById('mensajeExito');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recargar la página

    // Obtener valores del formulario
    const nombre = form.nombre.value;
    const fecha = form.fecha.value;
    const hora = form.hora.value;
    const consultorio = form.consultorio.value;

    // Crear nueva fila
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td class="border border-gray-300 px-4 py-2">${nombre}</td>
      <td class="border border-gray-300 px-4 py-2">${fecha}</td>
      <td class="border border-gray-300 px-4 py-2">${hora}</td>
      <td class="border border-gray-300 px-4 py-2">${consultorio}</td>
    `;

    // Agregar fila a la tabla
    tabla.appendChild(fila);

    // Mostrar mensaje de éxito
    mensajeExito.classList.remove('hidden');

    // Limpiar formulario
    form.reset();
  });
</script>