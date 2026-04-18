const randomTxt = document.getElementById("ramdomTxt")
const pageTitle = document.getElementById("title")

const randomThing = ["3.014 Vigintillion Cookies.","THE FACTORY MUST GROW","Welcome to the Information Superhighway!","NOWS YOUR CHANCE TO BE A [[BIG SHOT]]","amaze amaze amaze","Test"];

function main() {
    let randomThing  = getRandomSentence();
    randomTxt.innerHTML = randomThing
}

function getRandomSentence() {  
    let randomIndex = Math.floor(Math.random() * randomThing.length);
    let result = randomThing[randomIndex];
    return result;
}

main();