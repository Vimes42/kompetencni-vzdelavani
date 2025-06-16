console.log("ok")

const hamburger = document.getElementById('hamburger-icon');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});
    

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
        img2.classList.toggle('rotated');
    });

    return div;
};




const chars = [
    {
        heading: 'Zaměření na kompetence',
        text: 'Kompetenční vzdělávání rozvíjí znalosti, dovednosti, hodnoty a postoje, které studenti a studentky potřebují pro život a práci. Nejde jen o předávání faktů, ale i o komplexní rozvoj osobnosti.'
    },
    {
        heading: 'Aktivní a individualizované učení',
        text: 'Studenti a studentky se učí aktivně a individuálně, ať už samostatně, nebo ve skupině. Jsou spoluzodpovědní za svůj vlastní proces a výsledky učení, učitelky a učitelé jim v tom pomáhají a podporují je.'
    },
    {
        heading: 'Průběžné a formativní hodnocení',
        text: 'Studenti a studentky dostávají zpětnou vazbu v průběhu celého procesu učení se a mohou se tak díky ní zlepšovat.'
    },
    {
        heading: 'Modulární a flexibilní obsah',
        text: 'Studenti a studentky si mohou vybrat vzdělávací moduly, které je zajímají a které jim pomohou dosáhnout jejich cílů. Obsah výuky je tak flexibilní a přizpůsobený jejich potřebám.'
    },
    {
        heading: 'Individuální tempo',
        text: 'Neexistuje žádné jednotné tempo pro všechny.'
    },
    {
        heading: 'Učitel*ka jako facilitátor*ka',
        text: 'Učitel*ka je facilitátor*ka a průvodce*kyně. Pomáhá studentům a studentkám učit se, objevovat a rozvíjet své kompetence a sledovat svůj pokrok.'
    },
    {
        heading: 'Zaměření na studenty*ky',
        text: 'Učení je zaměřeno na studenty a studentky. Vzdělavatel*ka vychází z jejich potřeb a zájmů, aby jim daný obsah vzdělávání přizpůsobil*a.'
    },
    
];

const characteristicsDivHTML = document.querySelector('.characteristics__div');
chars.forEach(char => {
    characteristicsDivHTML.appendChild(characteristicsDiv(char.heading, char.text));
});




const faqDiv = (text, answer) => {
    const div = document.createElement('div');
    div.classList.add('faq__question');

    const div2 = document.createElement('div');
    div2.classList.add('faq__question__up');
    div.appendChild(div2);

    const h3 = document.createElement('h3');
    h3.textContent = text;
    div2.appendChild(h3);

    const img3 = document.createElement('img');
    img3.src = '/img/arrow-right.png';
    img3.classList.add('icon_more');
    div2.appendChild(img3);

    const p = document.createElement('p');
    p.innerHTML = answer;
    div.appendChild(p);

    div.addEventListener('click', () => {
        p.classList.toggle('show');
        img3.classList.toggle('rotated');
    });

    return div;
};

const questions = [
    {
        text: 'Jak mohu kompetenční vzdělávání zapojit do učení?',
        answer: `Kompetenční vzdělávání můžete začlenit tím, že při plánování výuky zohledníte, že studenti a studentky rozvíjí nejen znalosti, ale také dovednosti, postoje a hodnoty. Stanovte cíle učení, které reflektují všechny složky kompetencí, a vybírejte metody a aktivity, jež podpoří jejich komplexní rozvoj. Důležité je také vytvářet prostředí, kde studentstvo může aktivně objevovat, spolupracovat a reflektovat své učení. Pokud je pro vás koncept kompetenčního vzdělávání zatím neuchopitelný nebo moc komplexní, doporučujeme začít můžete také s postupným zapojováním zajímavých metod či se zohledňováním stylů učení v přípravě i realizaci aktivit. Jak na to? Mrkněte na <a href="https://www.slabikarnfv.eu/cs/e-learning" target="_blank">e-learning</a>, který vás provede základy práce s kompetencemi. Informace ale najdete také ve <a href="https://www.slabikarnfv.eu/slabikar_digital_cs.pdf" target="_blank">Slabikáři neformálního vzdělávání</a> (ke kompetencím, vzdělávacím cílům i stylům učení). Různé zajímavé metody můžete hledat na <a href="https://www.neformalnivzdelavani.eu/metody/" target="_blank">webu k neformálnímu vzdělávání</a>.`
    },
    {
        text: "Má kompetenční vzdělávání vyšší náklady na implementaci?",
        answer: 'Implementace kompetenčního vzdělávání může vyžadovat počáteční časovou investici, abyste se seznámili*y s novými přístupy a metodami. Dlouhodobě však přináší výhody v podobě vyšší motivace studentstva, efektivnějšího učení a lepších výsledků. Finanční náklady nemusí být nutně vyšší; často jde spíše o změnu přístupu než o investice do materiálů. Není ale třeba hned měnit vše. Změny samozřejmě můžete zavádět postupně, jak vám to budou kapacity dovolovat.'
    },
    {
        text: "Jak vyhodnocovat posun v kompetencích?",
        answer: 'Hodnocení kompetencí vyžaduje průběžné a formativní hodnocení, které sleduje pokrok studentů a studentek v jednotlivých oblastech. V rámci našeho školení <a href="https://markercs.cz/cs/skolycs/" target="_blank">Marker do škol</a> jsme tuto oblast testovali*y s učitelkami a učiteli. Brzy vám přineseme konkrétní a praktické nástroje, které vám pomohou efektivně hodnotit rozvoj kompetencí.'
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

const buttonSlabikar = document.querySelector(".slabikar");
buttonSlabikar.addEventListener("click", function() {
    window.open("https://www.anev.cz/projekty/slabikar/", "_blank");
  });