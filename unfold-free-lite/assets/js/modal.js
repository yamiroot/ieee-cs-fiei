
const dataFounders = {
    arturoBadillo: {
        name: 'Arturo Badillo',
        img: './assets/images/history_cs/arturo-badillo.jpeg',
        alt: 'Arturo Badillo',
        position: '1er Vicepresidente - Fundador',
        ocupation: 'Backend Senior Developer en Banco de Comercio.',
        commentary: ''
    },
    victorMiranda: {
        name: 'Victor Miranda',
        img: './assets/images/history_cs/victor-miranda.png',
        alt: 'Victor Miranda',
        position: 'Fundador',
        ocupation: 'Desarrollador de aplicaciones móviles en una FINTECH.',
        commentary: 'Fue lo mejor, mejoro mi comunicación en equipo ya que éramos bien coordinados. También, me dio la oportunidad de conocer gente que compartía la pasión por la carrera y con ello, mejorar mis habilidades como profesional en el área'
    },
    annieAzania: {
        name: 'Annie Azaña',
        img: './assets/images/history_cs/annie-azaña.png',
        alt: 'Annie Azania',
        position: 'Fundador',
        ocupation: 'Desarrolladora FrontEnd en Crowdbotics.',
        commentary: ''
    },
    ivanMedina: {
        name: 'Ivan Medina',
        img: './assets/images/history_cs/ivan-medina.png',
        alt: 'Ivan Medina',
        position: 'Fundador',
        ocupation: 'Software Engineer en Yalo.',
        commentary: 'Rescato la oportunidad de conocer personas apasionadas por lo que hacen y crear vínculos a lo largo del tiempo que ha permitido intercambiar experiencias, así como participar en conjunto en proyectos. Ello, definitivamente, ayuda a crecer profesionalmente'
    }
}

const buttonModalFounder = () => {
    const buttonsFounder = document.querySelectorAll('.button-founder');


    buttonsFounder.forEach((buttonFounder) => {
        buttonFounder.addEventListener('click', (event) => {

            switch (event.target.dataset.val) {
                case 'arturo-badillo':
                    fnGeneratorModal('modal-founder', 'modal-content-founder', 'modal-body-founder', dataFounders.arturoBadillo);
                    fnModalClose();
                    break;
                case 'victor-miranda':
                    fnGeneratorModal('modal-founder', 'modal-content-founder', 'modal-body-founder', dataFounders.victorMiranda);
                    fnModalClose();
                    break;
                case 'annie-azania':
                    fnGeneratorModal('modal-founder', 'modal-content-founder', 'modal-body-founder', dataFounders.annieAzania);
                    fnModalClose();
                    break;
                case 'ivan-medina':
                    fnGeneratorModal('modal-founder', 'modal-content-founder', 'modal-body-founder', dataFounders.ivanMedina);
                    fnModalClose();
                    break;
            }
        });
    });
};

buttonModalFounder();

fnModalClose = () => {
    const buttonsClose = document.querySelectorAll('.button-close');

    buttonsClose.forEach((buttonClose) => {
        buttonClose.addEventListener('click', () => {        
            document.querySelector('.modal').remove();
        })
    });
    
}

fnGeneratorContentModal = (pClassContent, pClassBody, pContentTemplate) => {
    console.log(pContentTemplate)

    const divContent = document.createElement('div');
    divContent.className = `modal-content ${pClassContent} border-0`;

    const divHeader = document.createElement('div');
    divHeader.className = 'modal-header border-0';
    divHeader.innerHTML = `
        <h5 class="modal-title" id="title-founder-modal"></h5>
        <button type="button" class="button-close close" >
          <span>&times;</span>
        </button>  
    `;

    divContent.appendChild(divHeader);

    const divBody = document.createElement('div');
    divBody.className = `modal-body w-100 ${pClassBody}`;
    divBody.innerHTML = `
        <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div id="div-img-modal">
                <img src="${pContentTemplate.img}" alt="" class="rounded-circle img-founder-modal">
            </div>
            <div id="div-name-founder-modal" class="text-center mt-2 mb-1 font-size font-weight-bold text-dark">${pContentTemplate.name}</div>
            <div id="div-position-founder-modal" class="text-center mt-1 mb-1 font-size text-primary">${pContentTemplate.position}</div>
            <div id="div-ocupation-founder-modal" class="text-center mt-1 mb-1 font-size mb-1 pr-1 pl-1">Actualmente se desempeña como ${pContentTemplate.ocupation}</div>
            <div id="div-commentary-founder-modal" class="text-center mt-1 mb-1 pr-1 pl-1">
                <p class="text-center font-size">Sobre su experiencia en Computer Society, comenta: "${pContentTemplate.commentary}".</p>
            </div>
        </div>
        `;

    divContent.appendChild(divBody);

    const divFooter = document.createElement('div');
    divFooter.className = 'modal-footer border-0';
    divFooter.innerHTML = `
        <button type="button" class="btn btn-primary button-close">Aceptar</button>    
    `;

    divContent.appendChild(divFooter);

    return divContent;
}

fnGeneratorModal = (pClassModal, pClassContent, pClassBody, pContentTemplate) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'modal d-flex justify-content-center align-items-center';
    divContainer.tabIndex = '-1';
    
    divContainer.setAttribute('role', 'dialog');

    const divModal = divContainer.cloneNode('div');
    divModal.className = pClassModal;
    divModal.role = 'document';

    divModal.appendChild(fnGeneratorContentModal(pClassContent, pClassBody, pContentTemplate));
    divContainer.appendChild(divModal);
    document.body.appendChild(divContainer);

    // Si fuese el modal de Registro de Resultados no debería remover
    // el modal, sin antes apagar los dispositvos de video activos.
    window.addEventListener('click', (event) => {
        const containerModal = document.querySelector('.modal');

        if (event.target == containerModal) containerModal.remove();
    });
}