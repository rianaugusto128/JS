const dobrar  = numero => numero * 2;

const quadrado = x => x * x;

const numeros = [1,2,3,4];
const dobrados = numeros.map(x => x * 2);

console.log("Donbro de 5: ", dobrar(5));
console.log("Quadrado de 5: ", quadrado(5));
console.log("Números dobrados: ", dobrados);