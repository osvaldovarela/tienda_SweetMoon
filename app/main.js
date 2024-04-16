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