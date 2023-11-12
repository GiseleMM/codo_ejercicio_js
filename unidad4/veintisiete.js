/**27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre,
M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular
e informar:
a. El porcentaje de mujeres mayores a 25 años.
 b. El porcentaje de hombres menores de 18 años.
 c. El promedio de edad de las mujeres.
 d. El promedio de altura de los hombres.
 e. La menor edad ingresada.
 f. La mayor altura ingresada */
let sexo;
let edad;
let altura;
let confirmar;
let continuar = true;

let total = 0;
let mujeres = 0;
let hombres = 0;
let mujeresEdad = 0;
let hombresAlturas = 0;
let mujeresMas25 = 0;
let hombresMenor18 = 0;
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let menorEdad;
let mayorAltura;
let porcentajeM25 = 0;
let promedioEdadM = 0;
let procentajeH18 = 0;
let promedioAlturaH = 0;
do {

    sexo = prompt("ingrese sexo H o M").trim().toLowerCase();
    edad = prompt("ingrese años").trim();
    altura = prompt("ingrese altura cm").trim();
    edad = parseInt(edad);
    altura = parseFloat(altura);
    if ((sexo.length !== 1) || (sexo !== 'h' && sexo !== 'm') || isNaN(edad) || isNaN(altura)) {
        alert("parametros ingresado no valido")
    } else {
        total++;
        if (sexo == 'm') {
            mujeres++;
            mujeresEdad += edad;
            if (edad > 25) {
                mujeresMas25++;
            }

        }
        if (sexo == 'h') {
            hombres++;
            hombresAlturas += altura;
            if (edad < 18) {
                hombresMenor18++;
            }


        }
        if (edad < min) {
            min = edad;
            menorEdad = edad;
        }
        if (altura > max) {
            max = altura;
            mayorAltura = altura;
        }
    }


    //control de iteracion
    confirmar = prompt("DESEA CONTINUAR?Y/N").trim();
    if (confirmar !== 'Y' && confirmar !== 'y') {
        continuar = false;
    }

} while (continuar);

if (total > 0) {
    console.log(mujeresMas25);
    console.log((mujeresMas25 * 100) / total);
    porcentajeM25 = (mujeresMas25 * 100) / total;
    if (mujeres > 0) {
        promedioEdadM = mujeresEdad / mujeres;
    }
    console.log(hombresMenor18);
    console.log((hombresMenor18 * 100) / total);
    procentajeH18 = (hombresMenor18 * 100) / total;
    if (hombres > 0) {
        promedioAlturaH = hombresAlturas / hombres;
    }
    document.write("El porcentaje de mujeres mayores a 25 años " + porcentajeM25 + "</br>");

    document.write("El porcentaje de hombres menores de 18 años " + procentajeH18 + "</br>");
    document.write("El promedio de edad de las mujeres " + promedioEdadM + "</br>");
    document.write("El promedio de altura de los hombres " + promedioAlturaH + "</br>");
    document.write("La menor edad ingresada " + menorEdad + "</br>");
    document.write("La mayor altura ingresada " + mayorAltura + "</br>");

}
