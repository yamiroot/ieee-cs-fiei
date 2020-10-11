
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
    }
}

const $$ = {
    buttonModalFounder: () => {
        const buttonsFounder = document.querySelectorAll('.button-founder');

        buttonsFounder.forEach((buttonFounder) => {
            buttonFounder.addEventListener('click', (event) => {
                
                const modalTitle = document.getElementById('title-founder-modal');
                const modalImgFounder = document.getElementById('div-img-modal').children[0];
                const modalPositionFounder = document.getElementById('div-position-founder-modal');
                const modalOcupationFounder = document.querySelector('#div-ocupation-founder-modal');
                const modalCommentaryFounder = document.querySelector('#div-commentary-founder-modal');
                console.log(event.target.dataset.val)

                switch (event.target.dataset.val) {
                    case 'arturo-badillo':
                        modalTitle.textContent = dataFounders.arturoBadillo.name;
                        modalImgFounder.src = dataFounders.arturoBadillo.img;
                        modalPositionFounder.textContent = dataFounders.arturoBadillo.position;
                        modalOcupationFounder.textContent = dataFounders.arturoBadillo.ocupation;
                        modalCommentaryFounder.innerHTML = dataFounders.arturoBadillo.commentary;

                        break;
                    case 'victor-miranda':
                        modalTitle.textContent = dataFounders.victorMiranda.name;
                        modalImgFounder.src = dataFounders.victorMiranda.img;
                        modalPositionFounder.textContent = dataFounders.victorMiranda.position;
                        modalOcupationFounder.textContent = dataFounders.victorMiranda.ocupation;
                        modalCommentaryFounder.textContent = dataFounders.victorMiranda.commentary;
                        break;
                    case '':
                        break;
                }
            });
        });
    },
};

$$.buttonModalFounder();
