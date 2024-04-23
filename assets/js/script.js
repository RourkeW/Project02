let currentMoleTile;

window.onload = function() {
    runGame();
}

function runGame() {
    for (let i =0; i < 6; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000);
}

function getRandomTile() {
    let num = Math.Floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "assets/images/mole.png";

    let num = getRandomTile();
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}