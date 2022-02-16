const age = prompt('Ingrese su edad');
const normalPrice = 1000;
const old = normalPrice *0.5;
const teen = normalPrice *0.8;
const child = 250

if( age > 55 ) {
    console.info('El valor de su entrada es $'+ old);
} else if(age >= 18) {
    console.info('El valor de su entrada es $' + normalPrice)
} else if (age >= 10){
    console.info('El valor de su entrada es $' + teen)
} else {
    console.info('El valor de su entrada es $' + child);
}

// Persona ingrese su edad y que basado en ella pueda obtener el precio final que abonara con su entrada al cine
// valor de entrada al cine es de $1000
// Personas mayor de 55 años tiene un descuento %50
// Personas entre 18 y 55 (54) no tienen descuento
// Personas entre 10 y 18 adolescentes tienen un 20% descuento
// Peronas menores abonan $250 unicamente
