/* 



let numeroIngresado1 = prompt ("Ingrese primer numero");
let numeroIngresado2 = prompt ("Ingrese segundo numero");
let numeroIngresado3 = prompt ("Ingrese tercer numero");


if ((numeroIngresado1 == numeroIngresado2) && (numeroIngresado2 == numeroIngresado3)) {
    document.write ("Felicidades, Ganaste el Primer premio!");
}else if (((numeroIngresado1 == numeroIngresado2) || (numeroIngresado1 == numeroIngresado3))||(numeroIngresado2== numeroIngresado3)) {
    document.write ("Felicidades, Ganaste el Segundo premio!");
}else{
    document.write ("Felicidades, Ganaste un Helado!");} */

const numIngresado1= document.querySelector("#numeroIngresado1");
const numIngresado2= document.querySelector("#numeroIngresado2");
const numIngresado3= document.querySelector("#numeroIngresado3");
const pResultado= document.querySelector ("#resultado");

let numeroIngresado1 = "numero1 def";
let numeroIngresado2 = "numero2 def";
let numeroIngresado3 = "numero3 def";


function verificar(){
    /* console.log("ganaste el primer premio") */
    numeroIngresado1=numIngresado1.value;
    numeroIngresado2=numIngresado2.value;
    numeroIngresado3=numIngresado3.value;

    if ((numeroIngresado1 == numeroIngresado2) && (numeroIngresado2 == numeroIngresado3)) {

        pResultado.innerHTML= "¡Felicidades, Ganaste el Primer premio!";

    }else if (((numeroIngresado1 == numeroIngresado2) || (numeroIngresado1 == numeroIngresado3))||(numeroIngresado2== numeroIngresado3)) {
       
       pResultado.innerHTML= "¡Felicidades, Ganaste el Segundo premio!";

    }else{
    
    pResultado.innerHTML= "¡Felicidades, Ganaste un Helado!";

}}
