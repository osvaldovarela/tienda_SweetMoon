//  por el momento no fue necesario usar js
//  queda el archivo para futuras mejoras
//  se agrego la llamada en el tag onclick="window.modal.showModal()"
//  y onclick="window.modal.close()"

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
