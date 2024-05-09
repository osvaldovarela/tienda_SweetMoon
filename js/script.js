

const form = document.querySelector(".form");
const nombre = document.querySelector("#nombre");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = nombre.value.trim();

    if(title.lenght >=3 ){
      const task = {
        
        title,
        complete: false,
      };
    }else {
        const error = document.querySelector(".error");
        error.textContent = "Debe ingresar 3 caracteres o mas";

        setTimeout(() => {
          error.textContent = "";
        }, 2000);
    
    };
   
  
});
