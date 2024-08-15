function Producto(Marca, modelo, color, precio) {
    this.Marca = Marca;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
  }
  
  const loki = new Producto("Venzo", "Loki", "Negro", 250000);
  const thorn = new Producto("Venzo", "Thorn", "Blanco", 300000);
  const raptor = new Producto("Venzo", "Raptor", "Naranja", 345000);
  const flash = new Producto("Olmo", "Flash", "Amarillo", 245000);
  const safari = new Producto("Olmo", "Safari", "Azul", 285000);
  const raven = new Producto("Olmo", "Raven", "Blanco/Rojo", 350000);
  
  const productos = [loki, thorn, raptor, flash, safari, raven];
  
  function mostrarProductos() {
    let mensaje = "Estos son las bicicletas disponibles ";
    productos.forEach((producto, index) => {
      mensaje += `${index + 1}. Marca: ${producto.Marca}, Modelo: ${producto.modelo}, Color: ${producto.color}, Precio: $${producto.precio}\n`;
    });
    mensaje += "Introduce el número del producto para agregar (deja en blanco para finalizar):";
    return mensaje;
  }
  
  function agregarProducto() {
    let selproducto = [];
    let total = 0;
    let seleccion;
  
    while (true) {
      seleccion = prompt(mostrarProductos());
  
      if (seleccion === null || seleccion.trim() === "") {
        break;
      }
  
      const index = parseInt(seleccion.trim()) - 1;
  
      if (index >= 0 && index < productos.length) {
        const productoSeleccionado = productos[index];

        selproducto.push(productoSeleccionado);

        total += productoSeleccionado.precio;

        alert(`Has agregado ${productoSeleccionado.Marca} ${productoSeleccionado.modelo}. Precio añadido: $${productoSeleccionado.precio}`);
      } else {
        alert("Selección inválida. Por favor, elige un número de la lista.");
      }
    }
  
    return total;
  }
  let usuario = prompt("Ingrese su nombre");
  alert("Su nombre es " + usuario);
  
  const montoFinal = agregarProducto();
  alert("El total de la suma es: $" + montoFinal);

  