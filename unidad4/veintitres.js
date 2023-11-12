/*
23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una
cantidad de valores desconocidos.
Realice un programa para informar si cada número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números
enteros.
*/
let min;
let max;
let array = [];
let num;
let continuar = false;
let rta;

min = prompt("ingrese el valor MIN de rango con una diferencia min de 5 enteros").trim();
max = prompt("ingrese el valor MAX de rango con una diferencia min de 5 enteros").trim();

do {
    num = prompt("Ingrese un numero").trim();
    array.push(num);
    rta = prompt("quiere ingresar otro numero? Y/N").trim();
    if (rta === 'Y' || rta === 'y') {
        continuar = true
    }else{
        continuar=false;
    }
} while (continuar);
min = parseInt(min);
max = parseInt(max);
array = array.map(item => parseInt(item));
console.log(array);
if (array.some(item => isNaN(item)) || isNaN(min) || isNaN(max)) {
    document.write("PARAMETRO INVALIDOS")
} else {
    if(max<min+5)
    {
document.write("el rango debe tener una diferencia mínima de 5 números enteros");
    }else
    {
        array.forEach(element => {
            if(element>=min && element<=max)
            {
                document.write("ESTA EN RANGO :"+element+"</br>");
                if(element%2===0) document.write("Y ES PAR"+"</br>");
            }else{

                document.write("NO ESTA EN RANGO : "+element+"</br>");
                if(element%2!==0) document.write("Y ES IMPAR"+"</br>");
            }
        });
    }

}