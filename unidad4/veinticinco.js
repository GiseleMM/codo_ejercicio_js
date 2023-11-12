/*
25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una
comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
 El porcentaje de alumnos aprobados (nota igual o superior a 4).
 El porcentaje de alumnos desaprobados (nota inferior a 4).
 El promedio de las notas.
Tenga en cuenta que solamente las notas pueden ir del 1 al 10.
*/
let alumnos = [];
let aprobados=0;
let porcAprob;
let desaprobados=0;

let porcDesap;
let notas=0;
let promedio;
let nota;
let continuar = true;
let confirmar;
do {

    nota = prompt("Ingrese nota de alumno de 1 a 10").trim();
    nota = parseFloat(nota);
    if (isNaN(nota) || nota < 1 || nota > 10) {
        alert("nota invalida");
    } else {
        alumnos.push(nota);
    }
    confirmar = prompt("DESEA CONTINUAR? Y/N").trim();
    if (confirmar !== 'y' && confirmar !== 'Y') {
        continuar = false

    }



} while (continuar);

alumnos.forEach(element => {
    notas+=element;
if(element>=4)
{
    aprobados++;
}else
{
    desaprobados++;
}
    
});
promedio=notas/alumnos.length;
porcAprob=(aprobados*100)/alumnos.length;
porcDesap=(desaprobados*100)/alumnos.length;

document.write("Promedio de notas:"+promedio+"</br>");
document.write("Porcentaje de aprobados"+porcAprob+"</br>");
document.write("Porcentaje de desaprobados"+porcDesap+"</br>");
