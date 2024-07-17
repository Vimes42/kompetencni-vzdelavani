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
        text: 'Hodnocení je průběžné a formativní. Studenti dostávají zpětnou vazbu v průběhu celého procesu učení a mohou se tak neustále zlepšovat.'
    },
    {
        heading: 'Modulární a flexibilní obsah',
        text: 'Obsah je modulární a flexibilní. Studenti si mohou vybrat moduly, které je zajímají a které jim pomohou dosáhnout jejich cílů.'
    },
    {
        heading: 'Individuální tempo',
        text: 'Studenti se učí svým vlastním tempem. Neexistuje žádné jednotné tempo pro všechny.'
    },
    {
        heading: 'Učitel jako facilitátor',
        text: 'Učitel je facilitátor a průvodce. Pomáhá studentům učit se a rozvíjet své kompetence.'
    },
    {
        heading: 'Zaměření na studenta',
        text: 'Učení je zaměřeno na studenta. Učitel vychází z potřeb a zájmů studenta.'
    },
    
];

const characteristicsDivHTML = document.querySelector('.characteristics__div');
chars.forEach(char => {
    characteristicsDivHTML.appendChild(characteristicsDiv(char.heading, char.text));
});



/* img2.classList.add('icon_more');*/
/* const characteristicsDiv = (heading, text) => {
    characteristicsDiv.addEventListener("onmouse", () => {
        const characteristicsDivHTML = document.querySelector(".characteristics__div");
        characteristicsDivHTML += (`<p>${text}</p>`)
        })
    return (
            <div intro class="characteristics__char">
                <img src="/img/check_157977.png" alt="icon_check" class="icon_check"/> 
                <h3>{heading}</h3>
                <img src="/img/arrow-down-sign-navigate_32195.png" />
            </div>
)}




const chars = [
    {
        heading: "Zaměření na kompetence",
        text: "Kompetenční vzdělávání se zaměřuje na rozvoj znalostí, dovedností a postojů, které studentstvo potřebuje pro život a práci. Nejde jen o předávání znalostí a faktů."
        },
    {
        heading: "Aktivní a individuální učení",
        text: "Studentstvo se učí aktivně a individuálně. Je zodpověné za svůj vlastní proces učení, učitelky a učitelé jim v tom pomáhají."
        },
]


const characteristicsDivHTML = document.querySelector(".characteristics__div");
characteristicsDivHTML = characteristicsDiv(chars.heading, chars.text);*/

/*
            <div intro class="characteristics__char2"><img src="/img/check_157977.png" alt="icon_check" class="icon_check">: </div>
            <div intro class="characteristics__char3"><img src="/img/check_157977.png" alt="icon_check" class="icon_check"></div>
            <div intro class="characteristics__char4"><img src="/img/check_157977.png" alt="icon_check" class="icon_check"></div>
            <div intro class="characteristics__char5"><img src="/img/check_157977.png" alt="icon_check" class="icon_check">
            <div intro class="characteristics__char6"><img src="/img/check_157977.png" alt="icon_check" class="icon_check">
            <div intro class="characteristics__char7"><img src="/img/check_157977.png" alt="icon_check" class="icon_check">Zaměření na studenta: Učení je zaměřeno na studenta. Učitel vychází z
                potřeb a zájmů studenta.</div>*/