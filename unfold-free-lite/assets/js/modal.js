const $$ = {
    buttonCloseModal: () => {
        const buttonsClose = doc.querySelectorAll('.founders');

        buttonsClose.forEach((buttonClose) => {
            buttonClose.addEventListener('click', () => {
                deleteNode(document.querySelector('.modal'));
            });
        });
    },
};

fnGeneratorContentModal = (pClassBody, pExistsHeader, pTemplates, pIsCamera) => {
    const divContent = document.createElement('div');
    divContent.className = 'modal-content';

    if (pExistsHeader) {
        const divHeader = document.createElement('div');
        divHeader.className = 'modal-header';

        if (!pIsCamera) {
            divHeader.innerHTML = `
                <h6 class="modal-title">${pTemplates.header}</h6>
                <button type="button" class="close button-close" aria-label="Close">
                    <span>&times;</span>
                </button>`;

            divContent.appendChild(divHeader);
        } else {
            divHeader.innerHTML = `
                <select name="device" id="devicesList" class="form-control anchoInput fontSize">Dispositivo</select>
                <button type="button" class="close button-close" aria-label="Close">
                    <span>&times;</span>
                </button>`;

            divContent.appendChild(divHeader);
        }
    }

    const divBody = document.createElement('div');
    divBody.className = `modal-body ${pClassBody}`;
    divBody.innerHTML = pTemplates.body;

    divContent.appendChild(divBody);

    const divFooter = document.createElement('div');
    divFooter.className = 'modal-footer';
    divFooter.innerHTML = pTemplates.footer;

    divContent.appendChild(divFooter);

    return divContent;
}

fnGeneratorModal = (pClassModal, pClassBody, pExistsHeader, pTemplates, pIsCamera) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'modal d-flex justify-content-center align-items-center show';
    divContainer.tabIndex = '-1';
    divContainer.setAttribute('aria-hidden', 'true');
    divContainer.setAttribute('role', 'dialog');

    const divModal = divContainer.cloneNode('div');
    divModal.className = pClassModal;
    divModal.role = 'document';

    divModal.appendChild(fnGeneratorContentModal(pClassBody, pExistsHeader, pTemplates, pIsCamera));
    divContainer.appendChild(divModal);
    document.body.appendChild(divContainer);

    window.addEventListener('click', (event) => {
        const containerModal = document.querySelector('.modal');

        if (event.target == containerModal) containerModal.remove();
    });
}