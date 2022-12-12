/*
Let's play Tic Tac Toe.

X's win ->
X - O
- X O
- - X

Nobody wins ->
X O X
O X O
O X O 

Create the data structures and classes to represent an n x n Tic Tac Toe board.
*/

const initialBoard = [
    'X', 'O', 'O',
    '-', 'X', 'O',
    '-', 'X', 'O',
];

// Mapped all tic tac toe winning conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Prints the board in tic tac toe
function printBoard(board) {
    console.log(board[0], board[1], board[2]);
    console.log(board[3], board[4], board[5]);
    console.log(board[6], board[7], board[8]);
}

function checkBoard(board) {
    let somebodyWon = false;

    // Map the conditions and verify if the board it meets the conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i], [winA, winB, winC] = winCondition;
        const a = board[winA], b = board[winB], c = board[winC];

        if (a == b && b == c) {
            console.log(`${a}' wins`);
            somebodyWon = true;
        }
    }

    if (!somebodyWon) {
        console.log('Nobody wins');
    }
}

printBoard(initialBoard);
checkBoard(initialBoard);
