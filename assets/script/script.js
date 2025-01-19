// Seleciona os botões
const loginBtn = document.querySelector('.btn:nth-child(1)');
const cadastroBtn = document.querySelector('.btn:nth-child(2)');

// Seleciona os formulários
const loginForm = document.querySelector('.login-form');
const cadastroForm = document.querySelector('.cadastro-form');

// Adiciona eventos de clique nos botões
loginBtn.addEventListener('click', () => {
  // Define qual botão é ativo
  loginBtn.classList.add('active');
  cadastroBtn.classList.remove('active');

  // Mostra o formulário de login
  loginForm.classList.add('active-form');
  cadastroForm.classList.remove('active-form');
});

cadastroBtn.addEventListener('click', () => {
  // Define qual botão é ativo
  cadastroBtn.classList.add('active');
  loginBtn.classList.remove('active');

  // Mostra o formulário de cadastro
  cadastroForm.classList.add('active-form');
  loginForm.classList.remove('active-form');
});

