let button = document.querySelector('submit');
let glow = document.querySelector('glow');
let table = document.querySelector('table');

const addRow = () => {
    let name = document.querySelector('#name').value;
    let birthday = document.querySelector('#birthday').value;
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    let birthdayCell = document.createElement('td');
    let nameText = document.createTextNode(name);
    let birthdayText = document.createTextNode(birthday);
    nameCell.appendChild(nameText);
    birthdayCell.appendChild(birthdayText);
    row.appendChild(nameCell);
    row.appendChild(birthdayCell);
    table.appendChild(row);
}

const highlightNextBirthday = () => {

}

button.addEventListener('click', addRow);

