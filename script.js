const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const restartButton = document.querySelector("#restart");
const winningLine = document.querySelector(".winning-line");

let gameOver = false;

const winningPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];


cells.forEach((cell) => {

    cell.addEventListener("click", function () {
        if (gameOver) {
            return;
        }
        if (cell.textContent !== "") {
            return;
        }

        cell.textContent = "X";
        cell.classList.add("x");

        if (checkWinner()) {
            return;
        }
        if (checkDraw()) {
            return;
        }

        statusText.textContent = "Computer's Turn...";

        setTimeout(() => {
            computerMove();
        }, 500);
    });

});


function checkWinner() {

    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {

            const winner = cells[a].textContent;

            showWinningLine(pattern);

            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            if (winner === "X") {
                statusText.textContent = "You Won! 🎉";
            } else {
                statusText.textContent = "Computer Won! 🤖";
            }

            gameOver = true;
            return true;
        }
    }
    return false;
}



function showWinningLine(pattern) {

    winningLine.className = "winning-line";

    if (pattern[0] === 0 && pattern[1] === 1) {
        winningLine.classList.add("row-1");
    }
    else if (pattern[0] === 3 && pattern[1] === 4) {
        winningLine.classList.add("row-2");
    }
    else if (pattern[0] === 6 && pattern[1] === 7) {
        winningLine.classList.add("row-3");
    }
    else if (pattern[0] === 0 && pattern[1] === 3) {
        winningLine.classList.add("col-1");
    }
    else if (pattern[0] === 1 && pattern[1] === 4) {
        winningLine.classList.add("col-2");
    }
    else if (pattern[0] === 2 && pattern[1] === 5) {
        winningLine.classList.add("col-3");
    }
    else if (pattern[0] === 0 && pattern[1] === 4) {
        winningLine.classList.add("diagonal-1");
    }
    else if (pattern[0] === 2 && pattern[1] === 4) {
        winningLine.classList.add("diagonal-2");
    }
}


function checkDraw() {

    for (let cell of cells) {

        if (cell.textContent === "") {
            return false;
        }
    }
    statusText.textContent = "It's a Draw! 🤝";

    gameOver = true;
    return true;
}


function computerMove() {

    if (gameOver) {
        return;
    }
    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        const values = [
            cells[a].textContent,
            cells[b].textContent,
            cells[c].textContent
        ];
        if (
            values.filter(value => value === "O").length === 2 &&
            values.includes("")
        ) {
            makeComputerMove(pattern);
            return;
        }
    }

    for (let pattern of winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        const values = [
            cells[a].textContent,
            cells[b].textContent,
            cells[c].textContent
        ];
        if (
            values.filter(value => value === "X").length === 2 &&
            values.includes("")
        ) {
            makeComputerMove(pattern);
            return;
        }
    }

    if (cells[4].textContent === "") {
        cells[4].textContent = "O";
        cells[4].classList.add("o");

        if (checkWinner()) {
            return;
        }
        if (checkDraw()) {
            return;
        }

        statusText.textContent = "Your Turn (X)";
        return;
    }


    const corners = [0, 2, 6, 8];
    const emptyCorners = [];

    for (let corner of corners) {
        if (cells[corner].textContent === "") {
            emptyCorners.push(corner);
        }
    }

    if (emptyCorners.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCorners.length);
        const move = emptyCorners[randomIndex];

        cells[move].textContent = "O";
        cells[move].classList.add("o");

        if (checkWinner()) {
            return;
        }
        if (checkDraw()) {
            return;
        }
        statusText.textContent = "Your Turn (X)";
        return;
    }

    const emptyCells = [];

    cells.forEach((cell, index) => {
        if (cell.textContent === "") {
            emptyCells.push(index);
        }
    });


    if (emptyCells.length > 0) {

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const move = emptyCells[randomIndex];
        cells[move].textContent = "O";
        cells[move].classList.add("o");

        if (checkWinner()) {
            return;
        }
        if (checkDraw()) {
            return;
        }

        statusText.textContent = "Your Turn (X)";
    }

}

function makeComputerMove(pattern) {

    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];

    let move;

    if (cells[a].textContent === "") {
        move = a;
    }
    else if (cells[b].textContent === "") {
        move = b;
    }
    else {
        move = c;
    }

    cells[move].textContent = "O";
    cells[move].classList.add("o");

    if (checkWinner()) {
        return;
    }
    if (checkDraw()) {
        return;
    }
    statusText.textContent = "Your Turn (X)";
}


restartButton.addEventListener("click", function () {

    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove(
            "x",
            "o",
            "winner"
        );
    });

    winningLine.className = "winning-line";
    gameOver = false;
    statusText.textContent = "Your Turn (X)";
});