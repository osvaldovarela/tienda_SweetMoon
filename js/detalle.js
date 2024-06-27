document.addEventListener("DOMContentLoaded", () => {
  // Obtener el ID del producto de los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);

  const id = parseInt(urlParams.get("id"));
  console.log("el id del html", id);

  // URL del archivo JSON local
  const jsonUrl = "../productos.json";

  fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("JSON loaded:", data);

      if (!Array.isArray(data.productos)) {
        throw new Error("Expected an array");
      }

      // Encontrar el producto correspondiente
      const articulo = data.productos.find((articulo) => articulo.id === id);

      if (articulo) {
        const cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = `
                            <div class="card">
                                <h2>${articulo.nombre || articulo.title}</h2>
                                <img src=".${articulo.source}" alt="${
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
      console.error("Error al cargar el JSON:", error);
    });
});
