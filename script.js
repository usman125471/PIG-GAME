'use strict'


const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currrent0El = document.getElementById('current--0');
const currrent1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')


const scores=[0,0]
let currentScore = 0;
let activePlayer = 0;

const switchPlayer= function () {
    document.getElementById(`score--${activePlayer}`).textContent = 0
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // WHEN CLICKED RETURNS A DICE
    diceEl.classList.remove('hidden')

    // PUT DICE PNG ACCORDING TO RANDOM NUMER
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
})

btnHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(`player--${activePlayer}`).classList.add('player--winner');
        
    }
    // switchPlayer();
    
})