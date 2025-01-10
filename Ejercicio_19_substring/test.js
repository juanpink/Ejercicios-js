let cuenta = 'ES6000491500051234567892'; //(24) Cuenta del B. Santander

//Mostrar las diferentes secciones del número de cuenta

const pais = cuenta.substring(0,2);
const dc = cuenta.substring(2,4);
const entidad = cuenta.substring(4,8);
const oficina = cuenta.substring(8,12);
const dc2 = cuenta.substring(12,14);
const num_cuenta = cuenta.substring(14);

/*
console.log(pais);
console.log(dc);
console.log(entidad);
console.log(oficina);
console.log(dc2);
console.log(num_cuenta);
*/

console.log(pais, dc, entidad, oficina, dc2, num_cuenta)