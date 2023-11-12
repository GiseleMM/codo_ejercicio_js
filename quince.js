/*
15. Se le solicita al usuario que ingrese un número. Realice un programa para informar
si el número es cero, par o impar.
 */
let numero=prompt("INGRESE UN NUMERO");
numero=parseInt(numero);
if(isNaN(numero))
{
    document.write("no se numero");
}else{

    if(numero===0)
    {
        document.write("ES CERO");
    }else{
        if(numero%2===0)
        {
            document.write("ES PAR");
        }else{
            document.write("ES IMPAR");
        }
    }
}
