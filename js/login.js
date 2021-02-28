const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	password: /^.{6,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(condicion) {

        //Si los datos son correctos        

    } else {
        
        //Si los datos son incorrectos

    }
});