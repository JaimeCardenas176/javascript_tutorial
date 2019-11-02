var signo = prompt('¿Culá es tu signo del zodiaco?');

switch (signo.toLowerCase()) {
    case 'aries':
        alert('Aportarás cierta inestabilidad a todo lo que gestiones, también en el trato personal');
        break;
    case 'geminis':
    case 'géminis':
        alert('Aportarás ideas imaginativas e impactantes, tu gestión convencerá; hazte valer');
        break;
    case 'tauro':
        alert('El ambiente en el trabajo será positivo y relajado, eso beneficiará tu gestión');
        break;
    case 'cáncer':
    case 'cancer':
        alert('Habrá un poco de todo, consecuencia de gestiones ya comenzadas, acabarás algo cansado');
        break;
    case 'leo':
        alert('Habrá un poco de todo, consecuencia de gestiones ya comenzadas, acabarás algo cansado');
        break;
    default:
        alert('Lo lamentamos, tu signo no está disponible por el momento');
        break;
}