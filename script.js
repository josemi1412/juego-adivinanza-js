
//El juego selecciona un numero al azar entre el 1 y el 100
let numeroAzar= Math.floor (Math.random()*100) + 1;


let numeroEntrada= document.getElementById('numeroEntrada');

let mensaje= document.getElementById('mensaje');
let intento =document.getElementById ('intento');
let intentos = 0;




function comprobar(){
    intentos ++;
    intento.textContent= intentos;

    let numeroIntroducido = parseInt(numeroEntrada.value);
    if(numeroIntroducido < 1 || numeroIntroducido > 100 || isNaN(numeroIntroducido)){
        mensaje.textContent= 'Por favor, introduce un número válido entre 1 y 100';
        return
    }

    if (numeroIntroducido === numeroAzar){
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número!';
        mensaje.style.color ='green';
        numeroEntrada.disabled =true;

    } else if (numeroIntroducido < numeroAzar){
        mensaje.textContent = '¡Más alto! El número correcto es mayor al que has escrito';
        mensaje.style.color = 'red';

    } else {
        mensaje.textContent = '¡Más bajo! El número correcto es menor al que has escrito';
        mensaje.style.color = 'red';
    }

}