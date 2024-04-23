window.onload = function() {
    runGame();
}

function runGame() {
    for (let i =0; i < 6; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}