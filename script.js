const exhibitItems = document.querySelectorAll('.exhibit-item');
  
    exhibitItems.forEach(item => {
      item.addEventListener('click', () => {
        // Quando um item da exposição for clicado
        // Pega os elementos dentro do item clicado
        const image = item.querySelector('img');
        const title = item.querySelector('h3');
        const description = item.querySelector('p');
  
        // Cria um modal para exibir informações
        const modal = document.createElement('div');
        modal.classList.add('modal');
  
        // Cria o conteúdo do modal com as informações do item
        const content = document.createElement('div');
        content.classList.add('modal-content');
        content.innerHTML = `
          <span class="close">&times;</span>
          ${image.outerHTML}
          ${title.outerHTML}
          ${description.outerHTML}
        `;
  
        // Adiciona o conteúdo do modal à página
        modal.appendChild(content);
        document.body.appendChild(modal);
  
        // Fecha o modal ao clicar no botão fechar
        const closeBtn = content.querySelector('.close');
        closeBtn.addEventListener('click', () => {
          document.body.removeChild(modal);
        });
      });
    });