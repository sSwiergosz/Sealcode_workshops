let s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = 'Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga." <br /><br />' + 'Trzynastym znakiem w tym zdaniu jest: ' + s.charAt(13) + '. <br />' + 'Znaki pomiędzy 7. a 12. pozycją to: ' + s.substring(7, 12) + '. <br />' + "Pierwszy raz znak 'ą' pojawia się na miejscu: " + s.indexOf('ą') + '. <br />' + 'Ten ciąg ma ' + s.length + ' znaków. <br/>' + "Po zamianie 'podstawą' na 'fundamentem' mamy: " + s.replace('podstawą', 'fundamentem') + '. <br />' + 'Część zdania przed przecinkiem to: ' + s.split(',')[0] + '. <br />' + 'Druga część zdania po odwróceniu to: ' + s.split(',')[1].split('').reverse().join('') + '.'

let message = `Operuję na zdaniu: ${s}

Trzynastym znakiem w tym zdaniu jest: ę.
Znaki pomiędzy 7. a 12. pozycją to: ą szc, 
Pierwszy raz znak 'ą' pojawia się na miejscu: 7.
Ten ciąg ma 60 znaków,
Po zamianie 'podstawą' na 'fundamentem' mamy: Podstawą szczęścia jest wolność, a fundamentem wolności odwaga..
Część zdania przed przecinkiem to: Podstawą szczęścia jest wolność
Druga część zdania po odwróceniu to: .agawdo icśonlow ąwatsdop a .`

console.log(message);