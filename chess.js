firstClick = null;
tmpStr = "";

function generateBoard() {
    const body = document.body;
    const table = document.createElement("table");
    table.setAttribute('id', "chessboard");

    for (let i = 0; i < 8; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 8; j++) {
            let cell = row.insertCell();
            cell.setAttribute('id', i + j);
            cell.setAttribute("onclick", 'swap(this)');

            if (i === 0 && j === 0) {
                cell.innerHTML = 'hi';
            }

        }
    }

    body.appendChild(table);
}

function swap(square) {
    if (firstClick) {
        tmpStr = square.innerHTML;
        square.innerHTML = firstClick.innerHTML;
        firstClick.innerHTML = tmpStr;
        firstClick = null;
    }
    else {
      firstClick = square;
    }
}

generateBoard();
