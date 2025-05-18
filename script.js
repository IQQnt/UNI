// Configuración editable - CAMBIA ESTOS VALORES
const config = {
    presente: true,  // true si está, false si no
    ubicacion: "Plaza principal",
    horario: "9:00 AM - 5:00 PM",
    fecha: "21 de Mayo, 2025",
    ultimaActualizacion: "21/05/2024 09:30 AM",
    version: "1.0.5"  // Aumenta este número con cada actualización
};

// Función para actualizar la vista
function actualizarVista() {
    const statusCard = document.getElementById('statusCard');
    const lastUpdate = document.getElementById('lastUpdate');
    const ubicacionTexto = document.getElementById('ubicacionTexto');
    const horarioTexto = document.getElementById('horarioTexto');
    const fechaTexto = document.getElementById('fechaTexto');
    const details = statusCard.querySelector('.details');
    const map = statusCard.querySelector('.map-placeholder');
    
    // Actualizar contenido
    ubicacionTexto.textContent = config.ubicacion;
    horarioTexto.textContent = config.horario;
    fechaTexto.textContent = config.fecha;
    lastUpdate.textContent = `Última actualización: ${config.ultimaActualizacion}`;
    
    if (config.presente) {
        statusCard.className = "status-card present";
        statusCard.querySelector('.status-icon i').className = "fas fa-check-circle";
        statusCard.querySelector('.status-title').textContent = "¡El camión está disponible!";
        statusCard.querySelector('p').textContent = "Puedes acudir a surtir gas en este momento";
        details.style.display = "block";
        map.style.display = "flex";
    } else {
        statusCard.className = "status-card absent";
        statusCard.querySelector('.status-icon i').className = "fas fa-times-circle";
        statusCard.querySelector('.status-title').textContent = "El camión no está disponible";
        statusCard.querySelector('p').textContent = "Vuelve a consultar más tarde para saber cuándo estará disponible";
        details.style.display = "none";
        map.style.display = "none";
    }
}

// Función para verificar cambios
function verificarCambios() {
    fetch(window.location.href + 'script.js?t=' + new Date().getTime())
        .then(response => response.text())
        .then(text => {
            const newVersion = text.match(/version: "([^"]+)"/)[1];
            if (newVersion !== config.version) {
                window.location.reload(true);
            }
        });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    actualizarVista();
    
    // Verificar cambios cada 2 minutos
    setInterval(verificarCambios, 2 * 60 * 1000);
    
    // Forzar recarga completa cada 30 minutos
    setTimeout(() => {
        window.location.reload(true);
    }, 30 * 60 * 1000);
});
