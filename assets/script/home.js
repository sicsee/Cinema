const explorarBtn = document.querySelector('.navbtn-container:nth-child(1) .navbtn');
const meusFilmesBtn = document.querySelector('.navbtn-container:nth-child(2) .navbtn');
const novoFilmeBtn = document.querySelector('.novo-filme-btn');

const catalogoSection = document.querySelector('.catalogo');
const meusFilmesSection = document.querySelector('.meus-filmes');
const novoFilmeSection = document.querySelector('.novo');

explorarBtn.addEventListener('click', () => {
  explorarBtn.classList.add('active');
  meusFilmesBtn.classList.remove('active');

  catalogoSection.classList.add('active-section');
  meusFilmesSection.classList.remove('active-section');
  novoFilmeSection.classList.remove('active-novo');
});

meusFilmesBtn.addEventListener('click', () => {
  meusFilmesBtn.classList.add('active');
  explorarBtn.classList.remove('active');

  meusFilmesSection.classList.add('active-section');
  catalogoSection.classList.remove('active-section');
  novoFilmeSection.classList.remove('active-novo');
});

novoFilmeBtn.addEventListener('click', () => {
  meusFilmesSection.classList.remove('active-section');
  novoFilmeSection.classList.add('active-novo');
});

