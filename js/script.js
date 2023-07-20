import { Cards } from './cards.js'
import { Icones } from './Icones.js'
import { Footer } from './footer.js';

window.onload = () => {
    const animaCards = new Cards();

    const widthSectionDicas = document.getElementById('sectionDicas').offsetWidth;
    
    if(widthSectionDicas >= 720){
        document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
    }

    console.log(widthSectionDicas);

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();
}