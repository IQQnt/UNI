// Configuración que puedes editar fácilmente
const config = {
    presente: true,  // Cambiar a false cuando no esté
    ubicacion: "Plaza principal, frente a la tienda de abarrotes",
    horario: "9:00 AM - 5:00 PM",
    fecha: "20 de Mayo, 2025",
    ultimaActualizacion: "20/05/2024 10:15 AM"
};

// Actualizar la vista según la configuración
function actualizarVista() {
    const statusCard = document.getElementById('statusCard');
    const lastUpdate = document.getElementById('lastUpdate');
    const ubicacionTexto = document.getElementById('ubicacionTexto');
    const horarioTexto = document.getElementById('horarioTexto');
    const fechaTexto = document.getElementById('fechaTexto');
    const details = statusCard.querySelector('.details');
    const map = statusCard.querySelector('.map-placeholder');
    
    // Actualizar texto
    ubicacionTexto.textContent = config.ubicacion;
    horarioTexto.textContent = config.horario;
    fechaTexto.textContent = config.fecha;
    lastUpdate.textContent = `Última actualización: ${config.ultimaActualizacion}`;
    
    if (config.presente) {
        // Configurar cuando está presente
        statusCard.className = "status-card present";
        statusCard.querySelector('.status-icon i').className = "fas fa-check-circle";
        statusCard.querySelector('.status-title').textContent = "¡El camión está disponible!";
        statusCard.querySelector('p').textContent = "Puedes acudir a surtir gas en este momento";
        
        // Mostrar detalles
        details.style.display = "block";
        map.style.display = "flex";
    } else {
        // Configurar cuando no está presente
        statusCard.className = "status-card absent";
        statusCard.querySelector('.status-icon i').className = "fas fa-times-circle";
        statusCard.querySelector('.status-title').textContent = "El camión no está disponible";
        statusCard.querySelector('p').textContent = "Vuelve a consultar más tarde para saber cuándo estará disponible";
        
        // Ocultar detalles
        details.style.display = "none";
        map.style.display = "none";
    }
    
    // Auto-recargar cada 5 minutos
    setTimeout(() => {
        window.location.reload();
    }, 5 * 60 * 1000);
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', actualizarVista);