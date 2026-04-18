let jsonTest = `{
    "gameList": {

        "game1":{
            "name": "game1"
        },
        "game2":{
            "name": "game1"
        }
    }
}`;

let gamesList = JSON.parse(jsonTest);
console.log(gamesList)

let game1 = gamesList.game1;
let imgLink = "/media/games/" + game1 + ".png"
console.log(imgLink)