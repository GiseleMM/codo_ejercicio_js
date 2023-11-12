/*
13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
antigüedad en la empresa. Realice un programa para calcular e informar el sueldo
mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al
15% del sueldo por año de antigüedad



*/
let sueldoMensual;
let valorHora;
let cantHorasTrabajadas;
let aniosAntiguedad;
const ANTIGUEDAD=15;
let bono;
valorHora=prompt("ingrese el valor de la hora");

cantHorasTrabajadas=prompt("ingrese la cantidad de horas trabajadas");

aniosAntiguedad=prompt("ingrese los años de antiguedad en la empresa");
valorHora=parseFloat(valorHora);
cantHorasTrabajadas=parseFloat(cantHorasTrabajadas);

aniosAntiguedad=parseFloat(aniosAntiguedad);
if(isNaN(valorHora) || isNaN(cantHorasTrabajadas)|| isNaN(aniosAntiguedad))
{
    document.write("tipo de datos no validos para calcular sueldo");
}else{
    
    sueldoMensual=valorHora*cantHorasTrabajadas;
    bono=(ANTIGUEDAD*aniosAntiguedad)/100.0;
    bono=sueldoMensual*bono;
    document.write("el sueldo  mensual es de: "+sueldoMensual +" y su bono es :"+bono);
}

