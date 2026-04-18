const background = document.querySelector('body')
const settingLink = document.getElementById("settingLink")

settingLink.addEventListener("click", settings);
function main() {
    const settingTheam = localStorage.getItem("theam");

    if (settingTheam == 1) {
        
    } 
    else if (settingTheam == 2) {
        background.style.backgroundColor = "#363636";

    } else { console.log("not working") } 
}

function settings() {
    const setting = prompt("what do you want to change in settings? \n 1: background 2: reset settings");
    if (setting == 1) {
        let background = prompt("what theam? \n 1: gray and blue (default) 2: dark")
        localStorage.setItem("theam", background);
        alert("reload page")
    }
    else if (setting == 2) {
        localStorage.clear();
        alert("Settings reset! Reload page.")
    }
}

function thisPage() {
    alert("Wait a sec...")
}
main();