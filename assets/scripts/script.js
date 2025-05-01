fetch('particles-config.json')  // Carrega o arquivo JSON
  .then(response => response.json())  // Converte para um objeto JavaScript
  .then(config => {
    // Inicializa o Particles.js com a configuração carregada
    particlesJS("particles-js", config);
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));


const linksNav = document.querySelectorAll('.linkInteracao'); //peguei o "endereço" dos links
//const urlLinkAtual = window.location.href;

linksNav.forEach( linkAtual =>{

    linkAtual.addEventListener('click', function (a) {
        linksNav.forEach(linkAtual => linksNav.classList.remove('ativo'));
        // Adiciona a classe 'ativo' ao link que foi clicado
        this.classList.add('ativo');
      });
   
});