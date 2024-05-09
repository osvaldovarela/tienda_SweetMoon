//funcion de manejo de menu hamburguesa

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//funcion para ir arriba

let mybutton = document.getElementById("myBtn");

//muestra el boton cuando ha bajado
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function irArriba() {
  document.body.scrollTop = 0; //para navegadores: Safari

  document.documentElement.scrollTop = 0; // Para navegadores: Chrome, Firefox, IE and Opera
}

// funcion para mostrar el modal al presionar el boton añadir
//lista de todos los botones para añadir
const btns_add_item = document.querySelectorAll(".add-product");

const closeModal = document.querySelector("#btn-cerrar-modal");

// Iteramos sobre cada botón y agregamos el event listener
btns_add_item.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.modal.show();
  });
});

closeModal.addEventListener("click", () => {
  window.modal.close();
});
