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

// perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((it) => {
  const ativarPergunta = (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
    const ativa = "ativa";
    resposta.classList.toggle(ativa);
    pergunta.setAttribute("aria-expanded", resposta.classList.contains(ativa));
  };

  it.addEventListener("click", ativarPergunta);
});

// galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens img");

galeria.forEach((it) => {
  const trocarImagem = (event) => {
    const img = event.currentTarget;
    galeriaContainer.prepend(img);
  };

  it.addEventListener("click", trocarImagem);
});
