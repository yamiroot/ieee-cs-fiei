
const dataFounders = {
    arturoBadillo: {
        name: 'Arturo Badillo',
        img: './assets/images/history_cs/arturo-badillo.jpeg',
        alt: 'Arturo Badillo',
        position: '1er presidente',
        ocupation: 'Senior Backend Developer en Banco de Comercio Perú',
        commentary: ''
    },
    victorMiranda: {
        name: 'Victor Miranda',
        img: './assets/images/history_cs/victor-miranda.png',
        alt: 'Victor Miranda',
        position: '1er secretario',
        ocupation: 'Desarrollador de aplicaciones móviles en una FINTECH.',
        commentary: '"Sobre mi experiencia trabajando en Computer, fue lo mejor, mejoro mi comunicación en equipo, eramos bien coordinados en su fundación, me dio la oportunidad de conocer gente que compartía la pasión por la carrera, y mejorar mis habilidades como profesional en el área."'
    },
    annieAzania: {
        name: 'Victor Miranda',
        img: './assets/images/history_cs/victor-miranda.png',
        alt: 'Victor Miranda',
        position: '1er secretario',
        ocupation: 'Desarrollador de aplicaciones móviles en una FINTECH.',
        commentary: '"Sobre mi experiencia trabajando en Computer, fue lo mejor, mejoro mi comunicación en equipo, eramos bien coordinados en su fundación, me dio la oportunidad de conocer gente que compartía la pasión por la carrera, y mejorar mis habilidades como profesional en el área."'
    },
    ivanMedina: {
        name: 'Victor Miranda',
        img: './assets/images/history_cs/victor-miranda.png',
        alt: 'Victor Miranda',
        position: '1er secretario',
        ocupation: 'Desarrollador de aplicaciones móviles en una FINTECH.',
        commentary: '"Sobre mi experiencia trabajando en Computer, fue lo mejor, mejoro mi comunicación en equipo, eramos bien coordinados en su fundación, me dio la oportunidad de conocer gente que compartía la pasión por la carrera, y mejorar mis habilidades como profesional en el área."'
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

                    break;
                case '':

                    break;
            }
        });


    });
};

buttonModalFounder();


fnModalClose = () => {
    const modal = document.querySelector('.modal');
    const buttonsClose = document.querySelectorAll('.close');

    console.log(buttonsClose, modal)

    buttonsClose.forEach((buttonClose) => {
        buttonClose.addEventListener('click', (event) => {
            console.log('delete', event.target)
            modal.parentNode.removeChild(modal);
        });
    });
}


fnGeneratorContentModal = (pClassContent, pClassBody, pContentTemplate) => {
    console.log(pContentTemplate)
    const divContent = document.createElement('div');
    divContent.className = `modal-content ${pClassContent} border-0`;

    const divHeader = document.createElement('div');
    divHeader.className = 'modal-header border-0';
    divHeader.innerHTML = `
        <h5 class="modal-title" id="title-founder-modal">Fundador</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>    
    `;

    divContent.appendChild(divHeader);

    const divBody = document.createElement('div');
    divBody.className = `modal-body w-100 ${pClassBody}`;
    divBody.innerHTML = `
        <div class="w-100 d-flex flex-column justify-content-center align-items-center">
            <div id="div-img-modal">
                <img src="${pContentTemplate.img}" alt="" class="rounded-circle item-img">
            </div>
            <div id="div-position-founder-modal">${pContentTemplate.position}</div>
            <div id="div-ocupation-founder-modal">${pContentTemplate.ocupation}</div>
            <div id="div-commentary-founder-modal">
            <p class="">${pContentTemplate.commentary}</p>
            </div>
        </div>
        `;

    divContent.appendChild(divBody);

    const divFooter = document.createElement('div');
    divFooter.className = 'modal-footer border-0';
    divFooter.innerHTML = `
        <button type="button" class="btn btn-info">Aceptar</button>    
    `;

    divContent.appendChild(divFooter);

    return divContent;
}

fnGeneratorModal = (pClassModal, pClassContent, pClassBody, pContentTemplate) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'modal d-flex justify-content-center align-items-center show';
    divContainer.tabIndex = '-1';
    divContainer.setAttribute('aria-hidden', 'true');
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