/**24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
un programa para calcular e informar cada operación deseada entre los dos números.
Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser
validados. */
let num1;
let num2;
let operador;
let resultado;
let continuar=true;
let rta;
do{


//tomo datos
num1=prompt("ingrese un numero").trim();
num2=prompt("ingrese otro numero").trim();
operador=prompt("ingrese un operador + - * /").trim();
console.log(operador);
// parseo
num1=parseInt(num1);
num2=parseInt(num2);
//verifico
if(isNaN(num2) || isNaN(num1))
{
    document.write("numeros no validos");
}else
{

    switch (operador) {
        case '+':
            resultado=num1+num2;
            break;
            
        case '/':
            if(num2===0)
            {
                document.write("No se puede dividir por cero")
                resultado="";
            }else
            {
                resultado=num1/num2;
            }
       
        break;
        
        case '*':
            resultado=num1*num2;
            
            break;
            
        case '-':
            resultado=num1-num2;
        break;
    
        default:
            document.write("OPERACION INVALIDA")
            resultado="";
            break;
    }

    if(!(resultado===""))
    {
        document.write("Resultado de "+num1+" "+operador+" "+num2+" es: "+resultado+"</br>");
    }

}

rta=prompt("DESEA CONTINUAR? Y/N").trim();
console.log(rta);
if(rta!=='y' && rta!=='Y')
{
    continuar=false;
}


}while(continuar);


