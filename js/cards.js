class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('sectionDicas');
        this.cardEsq = document.querySelector('.cardL');
        this.cardDir = document.querySelector('.cardR');
    }

    scrollCards() {
            window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 25) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 25)/10}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 25)/10}%)`;
        }
    }
}

export { Cards }