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
        text: 'Kompetenční vzdělávání se zaměřuje na rozvoj znalostí, dovedností, hodnot a postojů, které studentstvo potřebuje pro život a práci. Nejde jen o předávání znalostí a faktů.'
    },
    {
        heading: 'Aktivní a individualizované učení',
        text: 'Studentstvo se učí aktivně a individuálně (sami či ve skupině). Je zodpovědné za svůj vlastní proces učení, učitelky a učitelé jim v tom pomáhají.'
    },
    {
        heading: 'Průběžné a formativní hodnocení',
        text: 'Studentstvo dostává zpětnou vazbu v průběhu celého procesu učení a mohou se tak neustále zlepšovat.'
    },
    {
        heading: 'Modulární a flexibilní obsah',
        text: 'Studentstvo si může vybrat moduly, které je zajímají a které jim pomohou dosáhnout jejich cílů.'
    },
    {
        heading: 'Individuální tempo',
        text: 'Neexistuje žádné jednotné tempo pro všechny.'
    },
    {
        heading: 'Učitel/ka jako facilitátor/ka',
        text: 'Učitel/ka je facilitátor/ka a průvodce/kyně. Pomáhá studentstvu učit se a rozvíjet své kompetence.'
    },
    {
        heading: 'Zaměření na studentstvo',
        text: 'Učení je zaměřeno na studentstvo. Vzdělavatel/ka vychází z potřeb a zájmů studentstva.'
    },
    
];

const characteristicsDivHTML = document.querySelector('.characteristics__div');
chars.forEach(char => {
    characteristicsDivHTML.appendChild(characteristicsDiv(char.heading, char.text));
});

const advantagesDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('advantages__adv');

    const h3 = document.createElement('h3');
    h3.textContent = text;
    div.appendChild(h3);

    return div;
};



const advants = [
    {
        text: 'Lepší příprava studentstva na život a práci',
    },
    {
        text: 'Jejich vyšší motivace a zájem o učení',
    },
    {
        text: 'Cílený rozvoj klíčových kompetencí, jako je kritické myšlení, řešení problémů a komunikace',
    },
    {
        text: 'Lepší individuální přístup ke studentstvu ze strany učitelstva',
    },
]

const advantagesDivHTML = document.querySelector('.advantages__box');
advants.forEach(adv => {
    advantagesDivHTML.appendChild(advantagesDiv(adv.text));
});

const faqDiv = (text, answer) => {
    const div = document.createElement('div');
    div.classList.add('faq__question');

    const h3 = document.createElement('h3');
    h3.textContent = text;
    div.appendChild(h3);

    const img3 = document.createElement('img');
    img3.src = '/img/arrow-right.png';
    img3.classList.add('icon_more');
    div.appendChild(img3);

    const p = document.createElement('p');
    p.textContent = answer;
    div.appendChild(p);

    div.addEventListener('click', () => {
        p.classList.toggle('show');
    });

    return div;
};

const questions = [
    {
        text: 'Jak mohu kompetenční vzdělávání zapojit do učení?',
        answer: `Jde například o to, brát v potaz, že studentstvo rozvíjí znalosti, dovednosti, postoje a hodnoty. Cíle učení by tak měly být formulovány z pohledu všech složek kompetencí a dle toho je také třeba volit vhodné metody, které cílové skupině pomohou rozvíjet se. Pro více informací o zacílení aktivit můžete proklikat náš e-learning.`
    },
    {
        text: "Má kompetenční vzdělávání vyšší náklady na implementaci?",
        answer: 'Než se to člověk naučí, znamená to samozřejmě časovou investici.'
    },
    {
        text: "Jak hodnotit kompetence?",
        answer: 'To jsme právě testovali s učiteli a učitelkami, jež prochází naším školením Marker do škol. Brzy přineseme konkrétní výsledky.'
    },
]


const faqDivHTML = document.querySelector('.faq__box');
questions.forEach(q => {
    faqDivHTML.appendChild(faqDiv(q.text, q.answer));
});

const buttonOffer = document.querySelector(".offer");
buttonOffer.addEventListener("click", function() {
    window.open("https://www.anev.cz/wp-content/uploads/2024/04/nabidka_spoluprace_anev_final.pdf", "_blank");
  });