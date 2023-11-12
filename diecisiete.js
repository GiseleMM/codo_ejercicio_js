//17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si
//el valor ingresado es una vocal
let letra=prompt("ingrese una letra");
if(letra.trim().length!==1)
{
    document.write("valor ingresado no valido");
}else
{
    const array=['A','a','e','E','i','I','O','o']
if(array.includes(letra.trim()))
{
    document.write("ES VOCAL");
}else
{
    document.write("NO ES VOCAL");

}
}