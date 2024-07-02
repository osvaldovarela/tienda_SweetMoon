document.addEventListener("DOMContentLoaded", () => {
  // Obtener el ID del producto de los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);

  const id = parseInt(urlParams.get("id"));
  console.log("el id del html", id);

  fetch("https://sweet-moon-backend.vercel.app/productos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //console.log("productos", data);
      // Encontrar el producto correspondiente
      const articulo = data.find((articulo) => articulo.id === id);

      if (articulo) {
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = `
                            <div class="card">
                                <h2>${articulo.nombre || articulo.title}</h2>
                                <img src="${articulo.urlfoto}" alt="${
          articulo.nombre || articulo.title
        }" style="width: 100%;">
                                <p class=price>Precio: ${articulo.precio}</p>
                            </div>
                        `;
      } else {
        console.error("Artículo no encontrado");
      }
    })
    .catch((error) => {
      if (error.name === "TypeError") {
        console.error("Problema al realizar el fetch: ", error.message);
      } else {
        console.error("Error inesperado: ", error);
      }
    });
});
