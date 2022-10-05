let firstCard = Math.ceil(Math.random(2 - 12) * 10)
let secondCard = Math.ceil(Math.random(2 - 12) * 10)
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let myCards = document.getElementById("myCards")
let score = document.getElementById("score")
let actionText = document.getElementById("message")

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }

    myCards.textContent += ` ${firstCard} and ${secondCard}`
    score.textContent += ` ${sum}`
    actionText.textContent = message



}

