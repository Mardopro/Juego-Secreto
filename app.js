
/*
Codigo basico sin optimizar. 

let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Ingresa un número entre 1 y 10";

function intento(){
    alert("Click boton");
}
*/

//creación variables numeroSecreto e intentos
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//creación función de los textos
function asignarElementoTexto(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}



function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if(numeroSecreto === numeroUsuario){
        asignarElementoTexto('p',`Acertaste al número secreto en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(numeroSecreto<numeroUsuario){
            asignarElementoTexto('p','El número secreto es menor');
        } else{
            asignarElementoTexto('p','El numero secreto es mayor');
          
            
        }   
        intentos++;
        limpiarCaja();

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p','Ya se sortearon todos los numeros posibles');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
asignarElementoTexto('h1','Juego del número secreto');
asignarElementoTexto('p',`Ingresa un número entre 1 y ${numeroMaximo}` );
numeroSecreto= generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego(){
//liampiar caja
limpiarCaja();
//mensaje inicial
//generar numero secreto
//reiniciar intentos
condicionesIniciales();
//desabilitar boton
document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();




