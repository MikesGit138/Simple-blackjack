
let cardArr = [];

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector(".card-el")

let sum = 0;



function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 10) {
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {

    cardEl.textContent = "Card: ";
    for (let index = 0; index < cardArr.length; index++) {

        cardEl.textContent += cardArr[index] + " ";

    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";

    } else if (sum === 21) {

        hasBlackJack = true;
        message = "Congrats, you won blackjack😎";

    } else {
        isAlive = false;
        message = "You're out of the game😢";

    }
    messageEl.textContent = " " + message

}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardArr = [firstCard, secondCard];
    isAlive = true;
    sum = firstCard + secondCard;

    renderGame()
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let newCardVar = getRandomCard();
        
        sum += newCardVar;
        cardArr.push(newCardVar);

        renderGame()
    }

}

