function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
}

const tempRange = document.getElementById('temp-range');
const umidRange = document.getElementById('umid-range');
const tempVal = document.getElementById('temp-val');
const umidVal = document.getElementById('umid-val');
const statusText = document.getElementById('status-text');
const plantIcon = document.getElementById('plant-icon');

function updateSim() {
    const t = tempRange.value;
    const u = umidRange.value;
    
    tempVal.innerText = t;
    umidVal.innerText = u;

    let message = "Condições ideais! O morango cresce saudável. 🍓";
    let icon = "🍓";
    let color = "#2e7d32";

    // Lógica para Morangos (Preferem 18°C a 25°C e umidade 60-80%)
    if (t < 15 || t > 30) {
        message = "Atenção: Temperatura fora do ideal (18°C - 25°C).";
        icon = "🥀";
        color = "#d32f2f";
    } else if (u < 50) {
        message = "Solo muito seco! Aumente a irrigação.";
        icon = "🍂";
        color = "#f57c00";
    } else if (u > 85) {
        message = "Muita umidade! Risco de fungos.";
        icon = "🍄";
        color = "#1976d2";
    }

    statusText.innerText = message;
    statusText.style.color = color;
    plantIcon.innerText = icon;
    plantIcon.style.transform = `scale(${1 + (u/200)})`; // Planta "cresce" com a umidade
}

tempRange.addEventListener('input', updateSim);
umidRange.addEventListener('input', updateSim);

// Inicia o simulador
updateSim();