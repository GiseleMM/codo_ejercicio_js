//6. Realice el algoritmo para calcular e informar el resto de la división entera entre los
//valores.
// let val1=prompt("ingrese valor 1 ").trim();

// let val2=prompt("ingrese valor 2 distinto de cero ").trim();
// val1=Number.parseInt(val1);
// val2=Number.parseInt(val2);
let val1=4;
let val2=3;

if(val2!==0)
{
    console.log("el resto de "+val1+"/"+val2+" es :"+(val1%val2));
}else{
    console.log(" no se puede  dividir por cero");
}
// if(isNaN(val1) || isNaN(val2))
// {
//     console.log("no se puede realizar calculos con esos tipos de datos");

// }else{
//     console.log("el resto de "+val1+"/"+val2+" es :"+(val1%val2));
// }