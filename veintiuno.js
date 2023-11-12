/**
 * 
 * 
 * 21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
usuario que ingrese la categoría a la que pertenece que define el sueldo básico
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
más.
Realice un programa para calcular e informar el sueldo mensual del empleado,
indicando si su sueldo supera o no los u$s 4000.
 */
let sueldo = 0;
let categoria;
let horasExtras;
const BONO_500 = 500;
const BONO_1000 = 1000;
const CATEGORIA_UNO = 2000;

const CATEGORIA_DOS = 3000;

const CATEGORIA_TRES = 4000;
categoria = prompt("Ingree la categoria a la q pertenece el sueldo básico mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000)").trim();
horasExtras = prompt("ingrese horas extras").trim();
categoria = parseInt(categoria);
horasExtras = parseInt(horasExtras);
if (isNaN(categoria) || isNaN(horasExtras)) {
    document.write("PARAMETROS INVALIDOS");
} else {
    switch (categoria) {
        case 1:
            if (horasExtras > 20) {
                sueldo = CATEGORIA_UNO + BONO_500;
            } else {
                sueldo = CATEGORIA_UNO;
            }
            break;
        case 2:
            sueldo = CATEGORIA_DOS;
            break;
        case 3:
            if (horasExtras > 30) {
                sueldo = CATEGORIA_TRES + BONO_1000;
            } else {
                sueldo = CATEGORIA_TRES;
            }
            break;
        default:
            document.write("CATEGORIA INVALIDA")
            break;
    }
    // console.log(sueldo);
    if (sueldo !== 0) {

        if (sueldo > 4000) {
            document.write("SUELDO MENSUAL EMPLEADO SUPERA LOS 4000 :" + sueldo);

        } else {
            document.write("SUELDO MENSUAL EMPLEADO NO SUPERA LOS 4000 :" + sueldo);
        }
    }
}
