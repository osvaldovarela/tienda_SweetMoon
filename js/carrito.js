// // aqui planteare las funciones para mostrar los productos seleccionados y
// // vaciar el carrito
// // Crea elementos HTML
// const topNav = document.createElement("nav");
// topNav.classList.add("topNav");
// topNav.setAttribute("id", "myTopnav");

// const ulNav = document.createElement("ul");
// const logoLi = document.createElement("li");
// const logoImg = document.createElement("img");
// const nombrePaginaLi = document.createElement("li");
// const nombrePaginaH1 = document.createElement("h1");
// const menuLi = document.createElement("li");
// const menuUl = document.createElement("ul");
// const carritoLi = document.createElement("li");
// const aCarrito = document.createElement("a");

// const carrito = document.createElement("i");
// carrito.classList.add("icon");
// carrito.classList.add("fa");
// carrito.classList.add("fa-shopping-cart");

// carrito.setAttribute("aria-hidden", true);
// carrito.setAttribute("tittle", "Carrito");

// aCarrito.textContent = "Pedido";
// aCarrito.setAttribute("id", "pedido");

// aCarrito.appendChild(carrito);
// carritoLi.appendChild(aCarrito);

// logoImg.setAttribute("src", "./img/logo/logo.png");
// logoImg.setAttribute("alt", "Logo SweetMoon");
// logoImg.classList.add("logo");
// logoImg.classList.add("active");

// logoLi.appendChild(logoImg);

// nombrePaginaH1.textContent = "Sweet Moon";
// nombrePaginaH1.classList.add("active");
// nombrePaginaLi.appendChild(nombrePaginaH1);

// secciones.forEach((seccion) => {
//   let li = document.createElement("li");
//   let a = document.createElement("a");

//   a.setAttribute("href", seccion.href);
//   li.classList.add("seccionItem");
//   a.textContent = seccion.nombre;
//   li.appendChild(a);
//   menuUl.appendChild(li);
// });

// menuUl.appendChild(carritoLi);
// menuUl.classList.add("menu-items");
// menuLi.appendChild(menuUl);

// ulNav.appendChild(logoLi);
// ulNav.appendChild(nombrePaginaLi);

// ulNav.appendChild(menuLi);

// topNav.appendChild(ulNav);

// header.appendChild(topNav);
