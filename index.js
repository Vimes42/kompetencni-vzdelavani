console.log("ok")

const characteristicsDiv = (heading, text) => {
    const div = document.createElement('div');
    div.classList.add('characteristics__char');

    const h3 = document.createElement('h3');
    h3.textContent = heading;
    div.appendChild(h3);

    const img2 = document.createElement('img');
    img2.src = '/img/arrow-down-sign-navigate_32195.png';
    img2.classList.add('icon_more');
    div.appendChild(img2);

    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);

    div.addEventListener('click', () => {
        p.classList.toggle('show');
    });

    return div;
};


const chars = [
    {
        heading: 'Zaměření na kompetence',
        text: 'Kompetenční vzdělávání se zaměřuje na rozvoj znalostí, dovedností a postojů, které studentstvo potřebuje pro život a práci. Nejde jen o předávání znalostí a faktů.'
    },
    {
        heading: 'Aktivní a individuální učení',
        text: 'Studentstvo se učí aktivně a individuálně. Je zodpovědné za svůj vlastní proces učení, učitelky a učitelé jim v tom pomáhají.'
    },
    {
        heading: 'Průběžné a formativní hodnocení',
        text: 'Hodnocení je průběžné a formativní. Studentstvo dostává zpětnou vazbu v průběhu celého procesu učení a mohou se tak neustále zlepšovat.'
    },
    {
        heading: 'Modulární a flexibilní obsah',
        text: 'Obsah je modulární a flexibilní. Studentstvo si může vybrat moduly, které je zajímají a které jim pomohou dosáhnout jejich cílů.'
    },
    {
        heading: 'Individuální tempo',
        text: 'Každý/á se učí svým vlastním tempem. Neexistuje žádné jednotné tempo pro všechny.'
    },
    {
        heading: 'Učitel/ka jako facilitátor/ka',
        text: 'Učitel/ka je facilitátor/ka a průvodce/kyně. Pomáhá studentstvu učit se a rozvíjet své kompetence.'
    },
    {
        heading: 'Zaměření na studentstvo',
        text: 'Učení je zaměřeno na studentstvo. Učitel/ka vychází z potřeb a zájmů studentstva.'
    },
    
];

const characteristicsDivHTML = document.querySelector('.characteristics__div');
chars.forEach(char => {
    characteristicsDivHTML.appendChild(characteristicsDiv(char.heading, char.text));
});


const buttonOffer = document.querySelector(".offer");
buttonOffer.addEventListener("click", function() {
    window.open("https://www.anev.cz/wp-content/uploads/2024/04/nabidka_spoluprace_anev_final.pdf", "_blank");
  });