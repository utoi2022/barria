'use stric'

var usuario = prompt('ingresa tu nombre de usuario');
var contraseña = parseInt(prompt('ingresa tu contraseña'), 0);

while(isNaN(contraseña)){
    alert('La contraseña es incorrecta');
    contraseña = parseInt(prompt('ingresa tu contraseña correcta', 0));
};


const inicioSesion = [usuario, contraseña];
