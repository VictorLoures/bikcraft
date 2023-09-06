// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

// ativar itens do orcamento
const parametros = new URLSearchParams(location.search);

parametros.forEach((it) => {
  const elemento = document.getElementById(it);
  if (elemento) {
    elemento.checked = true;
  }
});
