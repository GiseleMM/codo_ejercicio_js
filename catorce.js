/**
14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
vendido. Realice un programa para calcular e informar el sueldo mensual del
empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y
otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo
final, calcular e informar el valor promedio de la hora del empleado..
 */

let sueldoMensual;
let sueldoFinal;
let valorHora;
let cantHorasTrabajadas;
let aniosAntiguedad;
const ANTIGUEDAD=15;
const SEGURO_CARO=50;
const CANT_SEGUROS=25;
let cantSegurosVendidos;
let seguroMasCaro;
let bonoAntiguedad;
let bonoSeguroMasCaro;
let bonoCantSeguros;
let promedio;
valorHora=prompt("ingrese el valor de la hora");

cantHorasTrabajadas=prompt("ingrese la cantidad de horas trabajadas");
aniosAntiguedad=prompt("ingrese los años de antiguedad en la empresa");
cantSegurosVendidos=prompt("ingrese cantidad de seguros vendidos");
seguroMasCaro=prompt("valor de seguro mas caro vendido");

valorHora=parseFloat(valorHora);
cantHorasTrabajadas=parseFloat(cantHorasTrabajadas);
aniosAntiguedad=parseFloat(aniosAntiguedad);
cantSegurosVendidos=parseInt(cantSegurosVendidos);
seguroMasCaro=parseFloat(seguroMasCaro);


if(isNaN(valorHora) || isNaN(cantHorasTrabajadas)|| isNaN(aniosAntiguedad)|| isNaN(seguroMasCaro) || isNaN(cantSegurosVendidos))
{
    document.write("tipo de datos no validos para calcular sueldo");
}else{
    
    sueldoMensual=valorHora*cantHorasTrabajadas;
    bonoAntiguedad=(ANTIGUEDAD*aniosAntiguedad)/100.0;
    bonoAntiguedad=sueldoMensual*bonoAntiguedad;
    bonoSeguroMasCaro=(seguroMasCaro*SEGURO_CARO)/100.0;
    bonoCantSeguros=(CANT_SEGUROS*cantSegurosVendidos)/100.0;
    bonoCantSeguros=sueldoMensual*bonoCantSeguros;
    
    document.write("el sueldo  mensual es de: "+sueldoMensual+"</br>");
    document.write("bonificacion por antiguedad es: "+bonoAntiguedad+"</br>");
    document.write("bonificacion por seguro mas caro es: "+bonoSeguroMasCaro+"</br>");
    document.write("bonificacion por cant de seguros vendidos  es: "+cantSegurosVendidos+"</br>");
    sueldoFinal=sueldoMensual+bonoAntiguedad+bonoSeguroMasCaro+bonoCantSeguros;
    promedio=sueldoFinal/cantHorasTrabajadas;
    document.write("el sueldo  final  es de: "+sueldoFinal+"</br>");
    document.write("el promedio por hora del empleado es de: "+promedio+"</br>");


}
