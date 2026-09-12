const cells = document.querySelectorAll('.cell');

const statusText = document.querySelector('#status');

const restartButton = document.querySelector('#restart');

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

    cell.addEventListener('click', function () {

        if (gameOver) {
            return;
        }

        if (cell.textContent !== '') {
            return;
        }

        cell.textContent = 'X';

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
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {

            const winner = cells[a].textContent;

            if (winner === 'X') {

                statusText.textContent = 'You Won! 🎉';

            } else {

                statusText.textContent = 'Computer Won! 🤖';

            }

            gameOver = true;

            return true;
        }
    }

    return false;
}


function checkDraw() {

    for (let cell of cells) {

        if (cell.textContent === '') {
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

    const emptyCells = [];

    cells.forEach((cell) => {

        if (cell.textContent === '') {
            emptyCells.push(cell);
        }

    });


    if (emptyCells.length === 0) {
        return;
    }


    const randomIndex =
        Math.floor(Math.random() * emptyCells.length);


    const randomCell = emptyCells[randomIndex];


    randomCell.textContent = 'O';


    if (checkWinner()) {
        return;
    }

    if (checkDraw()) {
        return;
    }


    statusText.textContent = 'Your Turn (X)';
}


restartButton.addEventListener('click', function () {

    cells.forEach((cell) => {

        cell.textContent = '';

    });

    gameOver = false;

    statusText.textContent = 'Your Turn (X)';

});