let envio = [];

const form = document.querySelector(".form");
const nombre = document.querySelector("#firstname");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = firstname.value.trim();

  if (title.length >= 3) {
    
    const task = {
      id: Date.now(),
      title,
      complete: false,
    };

    envio.push(task);


    firstname.value = "";

 
  } else {
    const error = document.querySelector(".error");
    error.textContent = "Debe ingresar 3 caracteres o mas";

    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }
});