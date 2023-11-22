const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {}
const liElements = document.querySelectorAll("li");
const listaEl = document.querySelector(".lista");

for (let i = 0; i < liElements.length; i++) {
  liElements[i].remove();
}

for (let item of cosasQueAprendimos) {
  const newLiEl = document.createElement("li");
  newLiEl.textContent = item.tema;
  const laClaseQueLeVoyAAsignarAlLi = item.class || "item";
  newLiEl.classList.add(laClaseQueLeVoyAAsignarAlLi);

  listaEl.appendChild(newLiEl);
}

main();

