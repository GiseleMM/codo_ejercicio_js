/*
10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
para calcular e informar el perímetro y el área del círculo. Se considerará para este
ejercicio que el valor de PI será 3.1416 */
//diámetro multiplicado por pi.
let diametro=prompt("Ingrese diametro de circulo").trim();
let radio;
let area;
let perimetro;
const PI=3.1416;
diametro=parseFloat(diametro);

if(isNaN(diametro))
{
document.write("dato invalido");
}else{
    radio=diametro/2;
    
area=PI*(Math.pow(radio,2));
perimetro=PI*diametro;
document.write("ÁREA DEL CIRCULO: "+area+" PERIMETRO: "+perimetro);
}