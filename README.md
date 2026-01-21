# Soundslice
Dit is mijn website die ik heb gemaakt voor Soundslice, ze vroegen om een pagina met een ASCII > Music Converter. Het doel was niet dat het werkte, maar wel dat het er netjes uit zag en dat het aan hun huisstijl voldoet.

Live URL: https://tzgaming.github.io/the-startup-responsive-interactive-website/

## Beschrijving
Zo ziet mijn website er uit:

<img width="1560" height="593" alt="image" src="https://github.com/user-attachments/assets/9c169256-5e7e-4559-a926-d4b161bcc7cb" />

### Responsive
![2026-01-2116-20-02-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/8f0e6bd7-b451-4be2-80c8-1b666f37e43c)

Ik heb een aantal breakpoints in mijn CSS geconfigureerd, zodat de content altijd breekt als het niet meer past. Op telefoon word de links in de header weggehaald en komt er een hamburger menu tevoorschijn die vervolgens de header links in een side-bar heeft staan. Zo kan je nog steeds goed navigeren op kleinere apparaten.

### Toegankelijk
De website is goed toegankelijk. Alle content word goed voorgelezen met screenreaders en alle interactieve elementen worden gehighlight als je met de muis erover heen hovered. Het enige minpunt is het contrast, vooral met de buttons. De lichtere oranje tint word niet goed opgepakt met de witte achtergrond. Ik kon het veranderen maar heb ervoor gekozen om het zo accuraat mogelijk te houden met hun bestaande website.

<img width="838" height="513" alt="image" src="https://github.com/user-attachments/assets/0a3b02d7-228c-4725-916c-3cc524bf02d5" />

### Huisstijl
Ik heb als eerst de fonts gedownload die ze gebruikte op hun website, zodat ik met precisie hun bestaande content kon nabouwen, zoals de header en footer. Ik heb uiteindelijk ook dezelfde fonts gebruikt voor de nieuwe converter, zodat het allemaal goed overeen komt. Ook heb ik hun button style overgenomen, die heeft alleen een border zonder kleur er in.

<img width="100" height="50" alt="image" src="https://github.com/user-attachments/assets/f5cefef0-7066-4523-af38-9abd2b187c14" />
<img width="100" height="50" alt="image" src="https://github.com/user-attachments/assets/6a1304d0-d54e-4401-91f5-326cfb1df708" />

Ze wouden het liefst gewoon een witte achtergrond behouden, want dat paste goed bij de notenbalk. Die is oorspronkelijk zwart en het is raar om het in het wit te hebben op een donkere achtergrond, dat paste gewoon niet.

### Interactief
Ik heb een paar interacties gemaakt, voor de conversie button en voor het hamburger menu:

![2026-01-2116-43-57-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/5cb7b0a8-c70d-4837-9e9a-75db8fc01364)

Ik heb de convert button een duidelijke kleur gegeven zodat het goed opvalt. Er zit ook een hover effect op, maar die zie je alleen niet in de video omdat die in mobile view staat. De hamburger heeft een effect dat hij de stijl verandert naar `open`, deze stijl verandert de kleur van de SVG en voegt een kleine oranje background-color achter de SVG. Zo kan je duidelijk zien dat hij is geopend.

## Kenmerken
De HTML structuur is goed opgebouwd en overzichtelijk en de elementen in de CSS staan ook in de goede volgorde zoals het staat op de website. Dat betekent dat de body helemaal bovenaan staat, main in het midden staat, en de footer helemaal onderaan staat. Ook heb ik al mijn media queries genest, zo kan je makkelijk de layout aanpassen (inplaats van dat ze allemaal onderaan de CSS staan).

<img width="314" height="684" alt="image" src="https://github.com/user-attachments/assets/a36b943c-5fbe-4fbd-b86e-aff3b1273b75" />
<img width="337" height="724" alt="image" src="https://github.com/user-attachments/assets/ee9e9142-0915-4d3f-a363-312faa7c25c2" />

Hier zie je mijn notenbalk interactie in Javascript:

https://github.com/TZGaming/the-startup-responsive-interactive-website/blob/a774f6c0753c4b5165045342c501f03d60fba60a/scripts/script.js#L1-L39

Als je op de "Convert" klikt, dan triggert hij de animatie die de tekst naar de notenbalk beweegt. Dit doet hij door een class toe te voegen en hem daarna weer te verwijderen waardoor alles weer reset. Ook word de notenbalk foto altijd anders, hij pakt 1 van de 3 fotos met muzieknoten (die ik zelf in elkaar heb gezet) en vervangt de bestaande content in de `img` tag.
