function mostrarMenu() {
    document.querySelector("#menu").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

document.querySelector("#hamburguesa").addEventListener("click", mostrarMenu);

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", mostrarMenu);
});



document.querySelector('#faqContent').addEventListener('click', (e) => {
  const header = e.target.closest('#faqHeader');
  if (!header) return;

  const group = header.closest('#faqGroup');
  const answer = group.querySelector('#faqAnswer');
  const icon = header.querySelector('.material-symbols-outlined');

  const open = answer.classList.toggle('active');
  if (icon){
    if (open){
        icon.textContent = "remove";
    }else{
        icon.textContent = "add"
    }
  } 
});

// Esperamos a que todo el contenido del DOM (la página HTML) esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtenemos el formulario por su ID
    const form = document.getElementById('subscribe');
    
    // 2. Escuchamos el evento 'submit' (cuando el usuario envía el formulario)
    form.addEventListener('submit', function(event) {
        
        // 3. Obtenemos el campo de entrada de 'nombre'
        const nombreInput = form.querySelector('input[name="nombre"]');
        
        // 4. Obtenemos el campo 'subject' (que está oculto)
        const subjectInput = form.querySelector('input[name="subject"]');
        
        // 5. Verificamos si los campos existen y si el campo de nombre tiene un valor
        if (nombreInput && subjectInput && nombreInput.value.trim() !== '') {
            
            // 6. Creamos el nuevo asunto del correo, reemplazando el marcador '%{nombre}'
            const nuevoAsunto = subjectInput.value.replace('%{nombre}', nombreInput.value);
            
            // 7. Asignamos el nuevo valor al campo 'subject' hola estoy probando
            subjectInput.value = nuevoAsunto;
        }
        
    });
});
