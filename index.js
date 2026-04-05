const randomTxt = document.querySelector("#ramdomTxt")
const pageTitle = document.querySelector("#ramdomTxt")

const randomThing = ["3.014 Vigintillion Cookies.","THE FACTORY MUST GROW","Welcome to the Information Superhighway!","NOWS YOUR CHANCE TO BE A [[BIG SHOT]]"];

function main() {
    getRandomSentence();
    title();
}

function getRandomSentence() {  
    let randomIndex = Math.floor(Math.random() * randomThing.length);
    let result = randomThing[randomIndex];
    return result;
}

function title() {
    let randomIndex = Math.floor(Math.random() * randomThing.length);
    let result = randomThing[randomIndex];
    return result;
}

main();