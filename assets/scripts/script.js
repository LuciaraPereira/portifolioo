fetch('particles-config.json')  
  .then(response => response.json())  
  .then(config => {
    // Efeito de partículas feito com a biblioteca particles.js de Vincent Garreau
    particlesJS("particles-js", config);
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));


  const navegacao = document.getElementById('links-nav');
  const menu = document.getElementById('icon-menu');

  menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativo')
  })


