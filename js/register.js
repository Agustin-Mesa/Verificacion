const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

// Objeto de las Expresiones regulares
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Objeto para verificar cada campo si está validado o no
const campos = {
    nombre: false,
    apellido: false,
    email: false,
    password: false
}

const validarFormulario = (e) => {
    // Para ver cuál campo vamos a verificar SEGÚN SU ATRIBUTO NAME
    switch (e.target.name) {

        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case 'apellido':
            validarCampo(expresiones.nombre, e.target, 'apellido');
        break;

        case 'email':
            validarCampo(expresiones.correo, e.target, 'email');
        break;

        case 'password':
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`campo-${campo}`).classList.remove('error');
        document.getElementById(`campo-${campo}`).classList.add('check');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-check');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-times');
        document.querySelector(`#campo-${campo} p`).classList.remove('activo');
        campos[campo] = true;
    } else {
        document.getElementById(`campo-${campo}`).classList.add('error');
        document.getElementById(`campo-${campo}`).classList.remove('check');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-times');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-check');
        document.querySelector(`#campo-${campo} p`).classList.add('activo');
        campos[campo] = false;
    }
}

// Por cada input que ejecute la siguiente función
inputs.forEach((input) => {
    // Cada vez que levanta la tecla compueba el campo.
    input.addEventListener('keyup', validarFormulario);
    // Cada vez que presionamos afuera del campo también se valida.
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.email && campos.password) {
        formulario.reset();

        document.getElementById('registrado-exitoso').classList.add('show');
        setTimeout(() => {
            document.getElementById('registrado-exitoso').classList.remove('show');

        }, 5000);

        document.querySelectorAll('.check').forEach((icono) => {
            icono.classList.remove('check');
        });
    } else {
        document.getElementById('rellenar-formulario').classList.add('show');
        setTimeout(() => {
            document.getElementById('rellenar-formulario').classList.remove('show');

        }, 5000);
    }
});