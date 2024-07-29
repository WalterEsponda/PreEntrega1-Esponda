alert("Bienvenido a proyecto de cotizacion, Por favor siga los pasos que se le indica")
function Cotizador() 
{
let nombre = prompt("Ingrese su nombre :");

if (nombre == null){
  console.log("Error al ingresar el nombre")
  alert("Debes ingresar un nombre")

} else {
  alert("Su nombre es " + nombre);
console.log("Su nombre es: ", nombre);

}

let Monto = prompt("Ingrese el monto que sera cotizado:");
console.log("Monto ingresadoes de $ " + Monto);

function DOLAR() {
  let MontoDolar = Monto * 1415;
  console.log(Monto, "= $", MontoDolar);
  alert("El monto cotizado en pesos es: $"+ MontoDolar);
}

function EURO() {
  let MontoEuro = Monto * 1009;
  console.log(Monto, "= $", MontoEuro);
  alert("El monto cotizado en pesos es: $"+ MontoEuro);
}

function YEN() {
  let MontoYen = Monto * 154;
  console.log(Monto, "= $", MontoYen);
  alert("El monto cotizado en pesos es: $"+ MontoYen);
}

let Moneda = prompt("Escriba alguna de las monedas mencionadas DOLAR/EURO/YEN");
console.log("Moneda Seleccionada: " + Moneda);

switch (Moneda) {
  case "DOLAR":
     DOLAR();
     break;

  case "EURO":
    EURO()
    break

  case "YEN":
    YEN()
    break

    default:
      console.log("Error al ingresar la moneda")
      alert("Error al ingresar una de las opciones, Por favor vuelva a escribirlo")
}

let respuesta = prompt("Desea Realizar otra cotizacion? SI/NO")

switch (respuesta){
  case "SI":
    Cotizador();
    
  case "NO": break;
}
}

Cotizador()

