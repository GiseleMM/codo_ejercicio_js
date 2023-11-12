/**
 * 
 * 11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
informar la suma y el promedio.
 */
let num1;
let num2;
let num3;
let num4;
let suma=0;
let promedio;
//sin bucles
num1=prompt("Ingrese un numero");

num2=prompt("Ingrese un numero");

num3=prompt("Ingrese un numero");

num4=prompt("Ingrese un numero");

num1=Number.parseInt(num1);
num2=Number.parseInt(num2);
num3=Number.parseInt(num3);
num4=Number.parseInt(num4);

if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4))
{
document.write("Tipo de dato no valido para realizar operacion de suma y promedio");
}else{
 suma=num1+num2+num3+num4;
 promedio=suma/4.0;
 document.write("la suma es :"+suma+" el promedio es: "+promedio);   
}