curPos = null;
visited = new Set("00");

function generateBoard() {
    const body = document.body;
    const table = document.createElement("table");
    table.setAttribute('id', "chessboard");

    for (let i = 0; i < 8; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 8; j++) {
            let cell = row.insertCell();
            cell.setAttribute('id', i + '' + j);
            cell.setAttribute("onclick", 'moveKnight(this)');
            cell.setAttribute('class', 'knight');
            cell.setAttribute('row', i);
            cell.setAttribute('col', j);

            if (i === 0 && j === 0) {
                cell.innerHTML = '&#9822;';
                curPos = cell;
            }

        }
    }

    let existingBoard = document.getElementById("chessboard");
    let resetButton = document.getElementById("reset");
    if (existingBoard) {
        body.removeChild(existingBoard);
    }

    body.insertBefore(table, resetButton);
}

function moveKnight(square) {
    if (square.innerHTML === 'X') {
        return;
    }

    curRow = curPos.getAttribute('row');
    curCol = curPos.getAttribute('col');
    newRow = square.getAttribute('row');
    newCol = square.getAttribute('col');

    if (curRow != newRow && curCol != newCol && Math.abs(newRow - curRow) + Math.abs(newCol - curCol) === 3) {
        visited.add(square.id)
        square.innerHTML = curPos.innerHTML;
        curPos.innerHTML = 'X';
        curPos = square;

    }
}

function resetBoard() {
    generateBoard();
}

generateBoard();
