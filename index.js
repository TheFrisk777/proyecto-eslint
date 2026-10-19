// Código con errores intencionales para probar ESLint
var nombre = "DevOps";
let fecha = new Date();


function saludar() {
  console.log("Hola " + nombre);
}


saludar();
console.log(fecha.toISOString());