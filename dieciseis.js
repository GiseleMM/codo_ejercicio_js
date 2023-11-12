/**
 * 
 * 16. Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es múltiplo de 3
 */
let numero=prompt("INGRESE UN NUMERO");
numero=parseInt(numero);
if(isNaN(numero))
{
    document.write("no se numero");

}else{
    if(numero%3==0)
    {
        document.write(numero+" es multiplo de 3");
        
    }else{
        document.write(numero+" es multiplo de 3");
    }
}