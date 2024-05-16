//evento escucha cuando cargue la pagina

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  //   const footer = document.querySelector("footer");

  //lista de secciones del navegador
  const secciones = [
    {
      nombre: "Home",
      href: "./index.html",
    },
    {
      nombre: "Sobre Sweet",
      href: "./aboutme.html",
    },
    {
      nombre: "Productos",
      href: "./productos.html",
    },
    {
      nombre: "Contacto",
      href: "./Contacto.html",
    },
  ];

  //creacion de las constantes de elementos
  //elemento imagen
  const imgLogo = document.createElement("img");
  imgLogo.classList.add("logo");
  imgLogo.setAttribute("src", "./img/logo/logo.png");
  imgLogo.setAttribute("alt", "Logo SweetMoon");

  //elemento nombre
  const nombrePagina = document.createElement("h1");
  nombrePagina.classList.add("active");
  nombrePagina.classList.add("nombre");
  nombrePagina.textContent = "Sweet Moon";

  const nav = document.createElement("nav");
  nav.classList.add("csMenu");

  const inputButton = document.createElement("input");
  inputButton.setAttribute("id", "hMenuBtn");
  inputButton.setAttribute("type", "checkbox");

  const labelMenu = document.createElement("label");
  labelMenu.setAttribute("for", "hMenuBtn");

  const ulMenu = document.createElement("ul");
  ulMenu.setAttribute("id", "hMenu");
  ulMenu.classList.add("mVerti");

  const carritoLi = document.createElement("li");
  const aCarrito = document.createElement("a");
  const imgCarrito = document.createElement("img");

  imgCarrito.classList.add("carrito");
  imgCarrito.setAttribute("src", "./img/productos/carrito/carrito.ico");

  aCarrito.textContent = "Pedido";
  aCarrito.setAttribute("id", "pedido");

  aCarrito.appendChild(imgCarrito);
  carritoLi.appendChild(aCarrito);

  secciones.forEach((seccion) => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.setAttribute("href", seccion.href);
    a.textContent = seccion.nombre;
    li.appendChild(a);
    ulMenu.appendChild(li);
  });

  ulMenu.appendChild(carritoLi);

  nav.appendChild(inputButton);
  nav.appendChild(labelMenu);
  nav.appendChild(ulMenu);

  header.appendChild(imgLogo);
  header.appendChild(nombrePagina);
  header.appendChild(nav);
});
