document.getElementById('form-postal').addEventListener('submit', function (e) {

    let valido = true;
    let primerError = null;

    const campos = [
        { id: 'correo', errorId: 'error-correo', msg: 'Por favor, introduce un correo electrónico válido.' },
        { id: 'nombre', errorId: 'error-nombre', msg: 'Por favor, introduce el nombre del destinatario.' },
        { id: 'mensaje', errorId: 'error-mensaje', msg: 'Por favor, escribe un mensaje.' }
    ];

    campos.forEach(function (campo) {
        const input = document.getElementById(campo.id);
        const error = document.getElementById(campo.errorId);

        error.textContent = '';
        input.setAttribute('aria-invalid', 'false');

        if (!input.validity.valid) {
            error.textContent = campo.msg;
            input.setAttribute('aria-invalid', 'true');
            valido = false;
            if (!primerError) primerError = input;
        }
    });

    if (!valido) {
        if (!valido) {
            e.preventDefault();
            if (primerError) primerError.focus();
        } else {
            e.preventDefault();
            alert("¡Postal enviada con éxito! Gracias por compartir la magia de Corona.");
            window.location.href = "postales.html";
        }
    }

});