const holes = document.querySelectorAll('.hole')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('.score')

let result = 0;

function runGame() {
    holes.forEach(holes => {
        holes.classList.remove('.mole')
    })
    //I am using the Math random to choose any of my 6 holes, I also use floor to round down.
    let randomHole = holes[Math.floor(Math.random() * 6)]
    console.log(randomHole)
}

runGame()
