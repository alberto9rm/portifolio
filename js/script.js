let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
        if(menuVisible){
            document.getElementById("nav").classList ="";
            menuVisible = false;

        }else{
            document.getElementById("nav").classList="response";
            menuVisible = true;
        }
}

function seleccionar(){
    //oculto EL MENU UNA VEZ QUE SELECCIONA UNA OPCION
            document.getElementById("nav").classList ="";
            menuVisible = false;
}
      
//FUNCIONES QUE  APLICA LAS ANIMACIONES DE LAS HABILADES
function efectoHabilidades (){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
        if(distancia_skills >=300){
                let habilidades = document.getElementsByClassName("progreso");
                habilidades[0].classList.add("javascript");
                habilidades[1].classList.add("htmlcss");
                habilidades[2].classList.add("java");
        }

}
        //DETECTA EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA HABILIDADES
        window.onscroll = function(){
            efectoHabilidades();
}


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene que el formulario recargue la página

        // Capturar los valores de los campos
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Enviar el formulario usando EmailJS
        emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
            from_name: name,
            phone_number: phone,
            reply_to: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Message sent successfully!.');
        }, function(error) {
            console.log('There was a mistake...', error);
            alert('Error sending the message. Please try again.');
        });
    });

