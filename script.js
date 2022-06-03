let button = document.querySelector('button');

const addRow = () => {
    let table = document.querySelector('table');
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let text = document.createTextNode('New Cell');
    cell.appendChild(text);
    row.appendChild(cell);
    table.appendChild(row);
}

button.addEventListener('click', addRow);
