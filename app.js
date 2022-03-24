const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')
const scorePlayer1 = document.querySelector('#score--0')
const scorePlayer2 = document.querySelector('#score--1')
const currentPlayer1 = document.querySelector('#current--0')
const currentPlayer2 = document.querySelector('#current--1')

dice.style.display = 'none'

let currentscore = 0
let activPlayer = 0
let score = [0, 0]


btnNew.addEventListener('click', newGame)
btnRoll.addEventListener('click', rollDice)
btnHold.addEventListener('click', hold)

function rollDice() {
    const randomNumber = Math.floor(Math.random()*6+1)
    dice.src = `dice-${randomNumber}.png`
    dice.style.display = 'block'
    if (randomNumber !==1) {
        currentscore += randomNumber
        document.querySelector(`#current--${activPlayer}`).textContent= currentscore
    } else{
        changePlayer()
    }
}
function hold() {
    score[activPlayer] += currentscore
    document.querySelector(`#score--${activPlayer}`).textContent = score[activPlayer]
    changePlayer()
}


function changePlayer() {
    document.querySelector(`#current--${activPlayer}`).textContent= '0'
        currentscore = 0
        activPlayer = activPlayer === 0 ? 1 :0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
}


function newGame() {
    currentPlayer1.textContent = '0'
    currentPlayer2.textContent = '0'
    scorePlayer1.textContent = '0'
    scorePlayer2.textContent = '0'
    dice.style.display = 'none'
}
