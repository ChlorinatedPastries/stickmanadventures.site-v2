function getRandomSentence() {
    const fruits = ["3.072 Vigintillion Cookies.","THE FACTORY MUST GROW","Welcome to the Information Superhighway!","Its TV Time!","[[HYPERLINK BLOCKED]]","I HATE CLANKERS","arbeth","DELTARUNE TOMORROW"
     ];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const result = fruits[randomIndex];
    document.getElementById("ramdomTxt").innerHTML = result;
    return result;
}
function getRandomTitle() {
    const name = ["Welcome to stickmanadventures.site! | Technoblade never dies!","Welcome to stickmanadventures.site! | engineer gaming","Welcome to stickmanadventures.site! | go outside","Welcome to stickmanadventures.site! | touch grass"]
    const randomIndex = Math.floor(Math.random() * name.length);
    const result = name[randomIndex];
    document.getElementById("title").innerHTML = result;
    return result;
}