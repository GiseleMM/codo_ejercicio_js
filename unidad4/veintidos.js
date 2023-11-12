/**
 * 
 * 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informa
si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno
 */

for (let index = 0; index < 3; index++) {
    let numero = prompt("ingrese numero");
    let resul = "";
    numero = parseInt(numero);
    if (isNaN(numero)) {
        alert("No es un numero valido");
    } else {
       
        if (numero % 3 === 0) {
            resul = "multiplo de 3 ";
        }
        if (numero % 5 === 0) {
            resul += " multiplo de 5 ";
        }
        if (resul === "") {
        alert("No es  multiplo de ninguno");
        } else {
            alert(resul);
        }
    
    }
    
}
