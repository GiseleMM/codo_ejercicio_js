/**
 * 
 * Unidad 2
9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
del usuario.

 */

let apellido=prompt("ingrese apellido");
let nombre=prompt("ingrese nombre");
if(apellido.trim().length!==0 && nombre.trim().length!==0)
{
    document.write("Bienvenido "+apellido+", "+nombre);
}else
{
    document.write("Bienvenido");
}
