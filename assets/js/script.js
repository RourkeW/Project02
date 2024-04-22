const holes = [...document.querySelectorAll('.hole')]
const score1 = document.querySelector('.score span')
let score = 0

function runGame() {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/images/mole.png'

    img.addEventListener('click', () => {
        score += 10
        score1.textContent = score
        img.src = 'assets/images/smash-image.png'
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        runGame()
    }, 1400)
}
runGame()
