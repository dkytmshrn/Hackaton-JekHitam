let deck
let cardBefore = 0
let cardNow = 0

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function userName(name) {
    let result = {
        name : name,
        live : 3,
    }
    return result
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i])
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let rand = Math.floor(Math.random() * deck.length)
        let temp = deck[i]
        deck[i] = deck[rand]
        deck[rand] = temp
    }
    console.log(deck);
}

function startGame() {
    
    let cardImage = document.createElement("img")
    let cardRandom = deck.pop()
    cardImage.src = "./images/" + cardRandom + ".png"
    cardNow = getValue(cardRandom)
    cardBefore = cardNow
    document.getElementById("your-cards").append(cardImage)

    document.getElementById("up").addEventListener("click", up)
    document.getElementById("down").addEventListener("click", down)
}

function getValue(card) {
    let data = card.split("-")
    let value = data[0];

    if (value === "A") {
        return 14;
    }
    else if (value === "K") {
        return 13;
    }
    else if (value === "Q") {
        return 12;
    }
    else if (value === "J") {
        return 11;
    }
    return parseInt(value);
}

function up() {
    
    let cardImg = document.createElement("img");
    let cardRandom = deck.pop();
    cardImg.src = "./images/" + cardRandom + ".png";
    yourSum = getValue(cardRandom);
    let x = document.getElementById("your-cards")
    x.append(cardImg.cloneNode(true))
    console.log(cardImg)
    let y = document.getElementById("randcard")
    y.append(cardImg.cloneNode(true))

}

function down() {
    
    let cardImg = document.createElement("img");
    let cardRandom = deck.pop();
    cardImg.src = "./images/" + cardRandom + ".png";
    yourSum = getValue(cardRandom);
    document.getElementById("your-cards").append(cardImg)
    document.getElementById("randcard").append(cardImg);
    
}