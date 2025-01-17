
// getting refrence of buttons
const addRowBtn = document.querySelector('#add-row');
const addColBtn = document.querySelector('#add-col');
const remRowBtn = document.querySelector('#rem-row');
const remColBtn = document.querySelector('#rem-col');

// getting refrence of the table
const table = document.querySelector('table');

// adding event listeners
addRowBtn.addEventListener('click', addRow);
remRowBtn.addEventListener('click', remRow);
addColBtn.addEventListener('click', addCol);
remColBtn.addEventListener('click', remCol);
``

// keeping track of the no of rows and cols
// let no_rows = table.rows.length;
// let no_cols = table.rows[0].cells.length;

function addRow(event) {
    //creating row
    row = document.createElement('TR');
    let noCols = table.rows[0].cells.length;
    for(let i=0; i<noCols; i++){
        let cell = document.createElement('TD');
        let textarea = document.createElement('TEXTAREA')
        textarea.setAttribute('placeholder', `${i}`);
        cell.appendChild(textarea);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

function remRow(event){
    //geting the refrence of rows
    const allRows = table.rows;
    let noRows = table.rows.length
    if(noRows === 1){
        alert('Can\'t delete any more rows');
        return;
    }
    table.rows[noRows-1].remove();
}

function addCol(event){
    const allRows = table.rows;
    let noRows = table.rows.length;
    let noCols = table.rows[0].cells.length;

    for(let i=0; i<noRows; i++){
        //create a td element
        let cell = document.createElement('TD');
        let textarea = document.createElement('TEXTAREA');
        textarea.setAttribute('placeholder', `${noCols}`);
        cell.appendChild(textarea);
        allRows[i].appendChild(cell);
    }
}

function remCol(event){
    const allRows = table.rows;
    let noRows = table.rows.length;
    let noCols = table.rows[0].cells.length;

    if(noCols === 1){
        alert('can\'t delte any more columns');
        return;
    }

    for(let i=0; i<noRows; i++){
        allRows[i].cells[noCols-1].remove();
    }
}

