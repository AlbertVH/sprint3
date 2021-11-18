// From html to javascript
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var direccion = document.getElementById("direccion");
var apellido = document.getElementById("apellido");
var contra = document.getElementById("contra");
var telefono = document.getElementById("telefono");

// Get the error message elements
var errorName = document.getElementById('errorName'); 
var errorEmail = document.getElementById('errorEmail'); 
var errorAddress = document.getElementById("errorAddress"); 
var errorSurname = document.getElementById("errorSurname");
var errorPassword = document.getElementById("errorPassword");
var errorPhone = document.getElementById('errorPhone');  

// Exercise 8
function validate() {
    // ***  (Min Length y required ya están en el HTML)  *** //
    
    // ***  Comprobar nombre letras  *** //
    if(!/^[A-Z]+$/i.test(nombre.value)) { // Si no se cumple, muestra error
        errorName.style.display = 'block';
    } else{
        errorName.style.display = 'none'; //Si se cumple, no se muestra
    }
    
    // ***  Igual con apellido que con nombre  *** //
    if(!/^[A-Z]+$/i.test(apellido.value)) {
        errorSurname.style.display = 'block';
    }else{
        errorSurname.style.display = 'none';
    }

    // ***  Contraseña debe ser números y letras  *** //
    if(!/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,16}$/.test(contra.value)){//
        errorPassword.style.display = 'block';
    } else{
        errorPassword.style.display = 'none';
    }

    // ***  email formato email (REGEX)  *** //
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo.value)){ 
        //{2,4} porque existe el dominio (.info)
        errorEmail.style.display = 'block';
    }else{
        errorEmail.style.display = 'none';
    }
}
