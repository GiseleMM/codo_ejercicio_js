/*
20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno */
let lado1;
let lado2;
let lado3;
lado1=prompt("Ingrese lado 1 de triangulo").trim();
lado2=prompt("Ingrese lado 2 de triangulo").trim();
lado3=prompt("Ingrese lado 3 de triangulo").trim();

lado1=parseFloat(lado1);
lado2=parseFloat(lado2);
lado3=parseFloat(lado3);
if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3))
{
    document.write("PARAMETROS NO VALIDO");
}else
{
    if(lado1===lado2 && lado1==lado3)
    {
    document.write("TRIANGULO EQUILÁTERO");

    }else
    {
        if(lado1===lado2 || lado1==lado3  || lado2==lado3)
        {
            document.write("TRIANGULO ISÓCELES");
        }else{
            document.write("TRIANGULO ESCALENO");

        }
    }
}
