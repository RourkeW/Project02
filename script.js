let currMoleTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    runGame();
}

function runGame() {
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 800);
    setInterval(setBomb, 1400);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "mole.png";

    let num = getRandomTile();
    if (currBombTile && currBombTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setBomb() {
    if (gameOver) {
        return;
    }
    if (currBombTile) {
        currBombTile.innerHTML = "";
    }
    let bomb = document.createElement("img");
    bomb.src = "bomb.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currBombTile = document.getElementById(num);
    currBombTile.appendChild(bomb);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
