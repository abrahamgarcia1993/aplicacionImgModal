const img = document.querySelectorAll("img");
const btn = document.createElement("button");
const container = document.querySelector(".container");
const cerrar = document.createElement("button");

img.forEach((element) => {
  element.addEventListener("click", () => {
    container.appendChild(btn);
    btn.textContent="X"
    btn.classList.add("cerrar")
    element.classList.add("principal");
    element.classList.remove("img-hover");
    btn.addEventListener("click", () => {
      element.classList.remove("principal");
      element.classList.add("img-hover");
      btn.remove();
    });
  });
});
console.log(cerrar);
