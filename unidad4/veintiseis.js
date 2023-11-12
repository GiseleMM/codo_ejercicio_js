/**26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice
un programa para calcular e informar:
a. La sumatoria de los valores ingresados.
b. El menor valor ingresado.
c. El mayor valor ingresado. */

let array=[];
let numero;
let min=Number.MAX_VALUE;
let max=Number.MIN_VALUE;
let confirmar;
let continuar=true;
let sumatoria=0;

do
{

    numero=prompt("INgrese un numero").trim();
    numero=parseInt(numero);
    if(isNaN(numero))
    {
        alert("dato no valido");
    }else
    {
    array.push(numero);
    }


    //control de iteracion
    confirmar=prompt("DESEA CONTINUAR?Y/N").trim();
    if(confirmar!=='Y' && confirmar!=='y')
    {
        continuar=false;
    }

}while(continuar);
console.log(array);
array.forEach(element => {
    sumatoria+=element;
    if(element<=min)
    {
        min=element;

    }
    if(element>=max)
    {
        max=element;
    }
});
document.write("SUMATORIA DA:"+sumatoria+"</br>");

document.write("MAYOR VALOR INGRESADO:"+max+"</br>");

document.write("MENOR VALOR INGRESADO:"+min+"</br>");