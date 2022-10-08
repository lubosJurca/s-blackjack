
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let myCards = document.getElementById("myCards")
let score = document.getElementById("score")
let question = document.getElementById("question")
let player = {
    name: "Lubos",
    chips: 100
}

let playerEl = document.getElementById("player-el")

playerEl.innerHTML = `Player: ${player.name}<br> Chips:  ${player.chips}$`



function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    myCards.textContent = "Cards: "


    for (let i = 0; i < cards.length; i++) {
        myCards.textContent += " " + cards[i]
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Blackjack!"
        hasBlackJack = true
        player.chips += 10
    } else {
        message = "You are out of the game!"
        isAlive = false
        player.chips -= 10
    }


    score.textContent = `Sum: ${sum}`
    question.innerText = message



}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard


        renderGame()
    }

}


function getRandomCard() {
    return Math.ceil(Math.random() * (11 - 1) + 1)
}