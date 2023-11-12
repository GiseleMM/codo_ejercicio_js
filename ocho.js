/**8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se
considerará para este ejercicio que el valor de PI será 3.1416. */
//. Perímetro = 2(pi) por radio. Área = pi por radio al cuadrado

let diametro=2;

let radio;
let area;
let perimetro;
const PI=3.1416;

    radio=diametro/2;
    
area=PI*(Math.pow(radio,2));
perimetro=PI*diametro;
console.log("ÁREA DEL CIRCULO: "+area+" PERIMETRO: "+perimetro);
