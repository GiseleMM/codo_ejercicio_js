/*
12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un
programa para calcular e informar el sueldo mensual del empleado. */

let sueldoMensual;
let valorHora;
let cantHorasTrabajadas;
valorHora=prompt("ingrese el valor de la hora");

cantHorasTrabajadas=prompt("ingrese la cantidad de horas trabajadas");
valorHora=parseFloat(valorHora);
cantHorasTrabajadas=parseFloat(cantHorasTrabajadas);
if(isNaN(valorHora) || isNaN(cantHorasTrabajadas))
{
    document.write("tipo de datos no validos para calcular sueldo");
}else{
    sueldo=valorHora*cantHorasTrabajadas;
    document.write("el sueldo  mensual es de: "+sueldo)
}

