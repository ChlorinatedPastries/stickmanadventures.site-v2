
function getRandomSentence() {
    const fruits = ["3.014 Vigintillion Cookies.","THE FACTORY MUST GROW","Welcome to the Information Superhighway!","WATERCOOLER","Its TV Time!","[[HYPERLINK BLOCKED]]","I HATE CLANKERS"
     ];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const result = fruits[randomIndex];
    return result;
}
function title() {
    const name = ["Welcome to stickmanadventures.site! | Technoblade never dies!","Welcome to stickmanadventures.site! | engineer gaming","Welcome to stickmanadventures.site! | go outside","Welcome to stickmanadventures.site! | touch grass"]
    const randomIndex = Math.floor(Math.random() * name.length);
    const result = name[randomIndex];
    document.getElementById("title").innerHTML = result;
    return result;
}