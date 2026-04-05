const background = document.getElementsByTagName("body")

function settings() {
    let settingsOpp = prompt("What do you want to change in settings? 1 for background, \n")
    if (settingsOpp == 1) {
        let settingsOpp1 = prompt("What do you want the background to be?")
    }
    else {
        print("Thats not one of the things!")
        settings()
    }
}

settings();