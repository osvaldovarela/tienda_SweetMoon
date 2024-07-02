fetch("https://sweet-moon-backend.vercel.app/productos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    //console.log(data);

    /*  creacion de la grilla de productos 
    trayendo los elementos de un json
*/
    const divContenedor = document.querySelector(".container-items");

    /*    guardo la info del json en una constante    */
    const productos = data;
    //console.log(productos);

    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];

      /*    creamos los elementos del html    */
      const item = document.createElement("div");
      item.classList.add("item");

      const figure = document.createElement("figure");
      const img = document.createElement("img");

      const divProducto = document.createElement("div");
      divProducto.classList.add("info-product");

      const nombre = document.createElement("h2");
      const pprice = document.createElement("p");
      pprice.classList.add("price");

      const buttonAdd = document.createElement("button");
      buttonAdd.classList.add("button");
      buttonAdd.classList.add("add-product");
      buttonAdd.setAttribute("type", "button");
      buttonAdd.textContent = "Añadir al carrito";

      /*    asignamos los valores a los elementos    */
      nombre.textContent = producto.nombre;
      pprice.textContent = "$ " + producto.precio;
      img.src = `${producto.urlfoto}`;
      img.alt = producto.nombre;
      img.setAttribute("id", `product-${producto.id}`);

      /*    agregamos los elementos al html    */
      divProducto.appendChild(nombre);
      divProducto.appendChild(pprice);
      divProducto.appendChild(buttonAdd);

      figure.appendChild(img);

      item.appendChild(figure);
      item.appendChild(divProducto);

      divContenedor.appendChild(item);
    }

    // funcion para mostrar el modal al presionar el boton añadir
    //lista de todos los botones para añadir
    const btns_add_item = document.querySelectorAll(".add-product");
    const contadorSpan = document.querySelector("#contador");
    const closeModal = document.querySelector("#btn-cerrar-modal");

    // Iteramos sobre cada botón y agregamos el event listener
    let contador = 0;
    btns_add_item.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.modal.showModal();
        contador++;

        // Actualiza el contenido del contador en la página
        contadorSpan.textContent = contador;
      });
    });

    closeModal.addEventListener("click", () => {
      window.modal.close();
    });
    // fin funcion para mostrar el modal al presionar el boton añadir
    // Seleccionar todas las imágenes dentro de elementos <figure>
    const images = document.querySelectorAll("figure img");
    // Agregar un listener de eventos a cada imagen
    images.forEach((img) => {
      img.addEventListener("click", function () {
        const id = this.id.split("-")[1]; // Obtener el ID del producto a partir del ID del <figure> padre
        console.log(id);
        window.location.href = `detalle.html?id=${id}`; // Redirigir a la página de detalle
      });
    });
    // Fin de la función para mostrar el modal al presionar el botón añadir
  })
  .catch((error) => {
    if (error.name === "TypeError") {
      console.error("Problema al realizar el fetch: ", error.message);
    } else {
      console.error("Error inesperado: ", error);
    }
  });
