
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


// keeping track of the no of rows and cols
let rows = 3;
let cols = 3;

function addRow(event) {
    //creating row
    row = document.createElement('TR');
    for(let i=0; i<3; i++){
        cell = document.createElement('TD');
        cell.innerText = i+1;
        row.appendChild(cell);
    }

    console.log(row);
    table.appendChild(row);

    rows++;
}

function remRow(event){
    //geting the refrence of rows
    const allRows = table.rows;
    console.log(allRows)
    table.rows[rows-1].remove();
    rows--;
}

