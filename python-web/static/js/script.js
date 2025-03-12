// Filtros

document.getElementById('aplicar-filtros').addEventListener('click', function() {

    // Obtener los valores seleccionados en los filtros

    const marcaSeleccionada = document.getElementById('filtro-marca').value;
    const precioSeleccionado = document.getElementById('filtro-precio').value;

    // Seleccionar todos los elementos de vehículos en la página

    const vehiculos = document.querySelectorAll('.vehiculo');

    // Recorrer cada vehículo para aplicar los filtros

    vehiculos.forEach(vehiculo => {

        // Obtener la marca y el precio del vehículo
        const marca = vehiculo.querySelector('h3').textContent;
        const precio = vehiculo.querySelector('p').textContent.replace(/\D/g, ''); // Eliminar caracteres no numéricos

        let coincideMarca = true;
        let coincidePrecio = true;

        // Filtrar por marca si se ha seleccionado una
        if (marcaSeleccionada && !marca.includes(marcaSeleccionada)) {
            coincideMarca = false;
        }

        // Filtrar por precio si se ha seleccionado un rango o un valor máximo
        if (precioSeleccionado) {
            if (precioSeleccionado.includes('-')) {
                // Si el precio es un rango (ejemplo: "10000-20000"), se extraen los valores mínimo y máximo
                const [min, max] = precioSeleccionado.split('-').map(Number);
                if (precio < min || precio > max) {
                    coincidePrecio = false;
                }
            } else {
                // Si solo se proporciona un valor, se asume que es el precio máximo
                if (precio > precioSeleccionado) {
                    coincidePrecio = false;
                }
            }
        }

        // Mostrar u ocultar el vehículo según los filtros aplicados
        if (coincideMarca && coincidePrecio) {
            vehiculo.style.display = 'block';
        } else {
            vehiculo.style.display = 'none';
        }
    });
});

// Modal de detalles
const modal = document.getElementById('modal-detalles');
const cerrarModal = document.querySelector('.cerrar');
const modalTitulo = document.getElementById('modal-titulo');
const modalPrecio = document.getElementById('modal-precio');
const modalDescripcion = document.getElementById('modal-descripcion');

// Agregar evento de clic a cada botón de "Ver detalles" de los vehículos

document.querySelectorAll('.vehiculo button').forEach(boton => {
    boton.addEventListener('click', function() {

        // Obtener la información del vehículo correspondiente

        const vehiculo = this.closest('.vehiculo');
        const titulo = vehiculo.querySelector('h3').textContent;
        const precio = vehiculo.querySelector('p').textContent;

        // Asignar los datos del vehículo al modal
        modalTitulo.textContent = titulo;
        modalPrecio.textContent = precio;
        modalDescripcion.textContent = "Más detalles sobre el vehículo...";

        // Mostrar el modal
        modal.style.display = 'flex';
    });
});


// Cerrar el modal al hacer clic en el botón de cierre
cerrarModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});