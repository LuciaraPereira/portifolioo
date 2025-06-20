fetch('particles-config.json')  // Carrega o arquivo JSON
  .then(response => response.json())  // Converte para um objeto JavaScript
  .then(config => {
    // Inicializa o Particles.js com a configuração carregada
    particlesJS("particles-js", config);
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));


  const navegacao = document.getElementById('links-nav');
  const menu = document.getElementById('icon-menu');

  menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativo')
  })


