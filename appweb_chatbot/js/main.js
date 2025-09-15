// Inicializamos ELIZA
let eliza = new ElizaBot();
let primeraVez = true;


async function enviarFrase() {
    const input = document.getElementById('textoInput'); 
    const historial = document.getElementById('historial');
    const frase = input.value.trim();
    if (!frase) return;

    historial.innerHTML += `<div class="historial-item"><b>Tú:</b> ${frase}</div>`;

    if (primeraVez) {
        historial.innerHTML += `<div class="historial-item"><b>Banano:</b> Estoy listo para hablar, me llamo banano.</div>`;
        primeraVez = false;
    }

    try {
        const response = await fetch('/procesar', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({frase: frase})
        });
        const data = await response.json();
        let reply = "";

        if (data.tipo === "matematica") {
            reply = data.respuesta;
        } else if (data.tipo === "eliza") {
            reply = eliza.transform(frase);
        } else {
            reply = "No entendí tu mensaje.";
        }

        historial.innerHTML += `<div class="historial-item"><b>Banano:</b> ${reply}</div>`;
        historial.scrollTop = historial.scrollHeight;
        input.value = "";

        if (eliza.quit) {
            input.disabled = true;
            historial.innerHTML += `<div class="historial-item"><b>Banano:</b> ${eliza.getFinal()}</div>`;
        }
    } catch (error) {
        historial.innerHTML += `<div class="historial-item"><b>Banano:</b> Error al procesar mensaje.</div>`;
    }
}

// Listener Enter (se asegura que el DOM ya cargó)
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('textoInput');
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') enviarFrase();
    });
});
