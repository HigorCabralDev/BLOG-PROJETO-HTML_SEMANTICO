const root = document.documentElement;
const btn = document.getElementById("btnTema");


if (localStorage.getItem("tema") === "escuro") {
  root.setAttribute("data-tema", "escuro");
}

btn.addEventListener("click", () => {
  const escuro = root.getAttribute("data-tema") === "escuro";

  if (escuro) {
    root.removeAttribute("data-tema");
    localStorage.setItem("tema", "claro");
  } else {
    root.setAttribute("data-tema", "escuro");
    localStorage.setItem("tema", "escuro");
  }
});