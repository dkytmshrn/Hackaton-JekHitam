
let deck
let cardBefore = 0
let cardNow = 0
let live = 1
let totalPoint = 0
let button = true

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
    var name = prompt("AHOOY PIRATE!! AYO TEBAK NILAI KARTU SELANJUTNYA YANG AKAN KELUAR!!! SIAPA NAMA MU?!!", "");
    if (name != null && name != "") {
        playerName = name;
    }
    document.getElementById("username").innerHTML += playerName
}

console.log(webDefault);
function userName(name) {
    let result = {
        name: name,
        live: 3,
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
    console.log(deck);
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

function reset() {
    location.reload()
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
    if (!button) {
        return
    }
    
    let cardImg = document.createElement("img")
    let cardRandom = deck.pop()
    cardImg.src = "./images/" + cardRandom + ".png"
    cardNow = getValue(cardRandom)
    let x = document.getElementById("your-cards")
    x.append(cardImg.cloneNode(true))
    let y = document.getElementById("randcard")
    y.src = "./images/" + cardRandom + ".png"
    
    if (cardNow > cardBefore) {
        totalPoint += 1000
        document.getElementById("score").innerHTML = `Score: ${totalPoint}`
    }
    else {
        live--
    }
    
    if (live === 0) {
        button = false
        message = `WALK ON PLANK YOU LOSER!!`
        document.getElementById("results").innerText = message;
        document.getElementById("reset").style.display = 'block'
        document.getElementById("up").style.display = 'none'
        document.getElementById("down").style.display = 'none'
    }
    
    cardBefore = cardNow
    
    if (totalPoint === 5000) {
        message = `YOU GOT ME!!`
        document.getElementById("results").innerText = message;
        document.getElementById("score").innerHTML = `Score: ${totalPoint}`
        document.getElementById("reset").style.display = 'block'
        document.getElementById("up").style.display = 'none'
        document.getElementById("down").style.display = 'none'
    }
    document.getElementById("reset").addEventListener("click", reset)
}

function down() {
    if (!button) {
        return
    }
    let message = ''
    
    let cardImg = document.createElement("img")
    let cardRandom = deck.pop()
    cardImg.src = "./images/" + cardRandom + ".png"
    cardNow = getValue(cardRandom)
    let x = document.getElementById("your-cards")
    x.append(cardImg.cloneNode(true))
    let y = document.getElementById("randcard")
    y.src = "./images/" + cardRandom + ".png"

    if (cardNow < cardBefore) {
        totalPoint += 1000
        document.getElementById("score").innerHTML = `Score: ${totalPoint}`
    }
    else {
        live--
    }
    
    if (live === 0) {
        button = false
        message = `WALK ON PLANK YOU LOSER!!`
        document.getElementById("results").innerText = message;
        document.getElementById("reset").style.display = 'block'
        document.getElementById("buttons").style.display = 'none'
    }
    
    cardBefore = cardNow
    
    if (totalPoint === 5000) {
        message = `YOU GOT ME!!`
        document.getElementById("results").innerText = message;
        document.getElementById("score").innerHTML = `Score: ${totalPoint}`
        document.getElementById("reset").style.display = 'block'
        document.getElementById("buttons").style.display = 'none'
    }
    
    document.getElementById("reset").addEventListener("click", reset)
}

// import {webDefault} from "./body.js"