let s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = 'Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga." <br /><br />' + 'Trzynastym znakiem w tym zdaniu jest: ' + s.charAt(13) + '. <br />' + 'Znaki pomiędzy 7. a 12. pozycją to: ' + s.substring(7, 12) + '. <br />' + "Pierwszy raz znak 'ą' pojawia się na miejscu: " + s.indexOf('ą') + '. <br />' + 'Ten ciąg ma ' + s.length + ' znaków. <br/>' + "Po zamianie 'podstawą' na 'fundamentem' mamy: " + s.replace('podstawą', 'fundamentem') + '. <br />' + 'Część zdania przed przecinkiem to: ' + s.split(',')[0] + '. <br />' + 'Druga część zdania po odwróceniu to: ' + s.split(',')[1].split('').reverse().join('') + '.'

let message = `Operuję na zdaniu: ${s}

Trzynastym znakiem w tym zdaniu jest: ${s.charAt(13)}.
Znaki pomiędzy 7. a 12. pozycją to: ą szc ${s.charAt(7-12)}, 
Pierwszy raz znak 'ą' pojawia się na miejscu: ${s.indexOf('ą')}.
Ten ciąg ma ${s.length} znaków,
Po zamianie 'podstawą' na 'fundamentem' mamy: ${s.replace('podstawą', 'fundamentem')}.
Część zdania przed przecinkiem to: ${s.split(',')[0]}.
Druga część zdania po odwróceniu to: ${s.split(',')[1].split('').reverse().join('')}.`

console.log(message);