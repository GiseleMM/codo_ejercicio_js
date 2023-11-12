/**
 * 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un
número. Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
enteros
 */
let min = prompt("Ingrese el extremo min de un rango de una diferencia minima de 5 numero");
let max = prompt("Ingrese el extremo max de un rango");
let numero = prompt("Ingrese un numero");
numero = parseInt(numero);
min = parseInt(min);
max = parseInt(max);


if (isNaN(numero) || isNaN(min) || isNaN(max)) {
    document.write("parametros invalidos");
} else {
    if ((max >= (min + 5))) {

        if (numero >= min && numero <= max) {
            document.write("ESTA EN RANGO </br>");
            if (numero % 2 === 0) {
                document.write("ES PAR</br>");
            }
        } else {
            document.write(" NO ESTA EN RANGO </br>");
            if (numero % 2 !== 0) {
                document.write("ES IMPAR</br>");
            }
        }

    } else {
        document.write("el rango debe tener una diferencia mínima de 5 números       enteros")
    }


}