let button = document.querySelector('#submit');
let glow = document.querySelector('#glow');
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
    var rowToHighlight
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        console.log(row);
        let birthday = row.cells[1].innerHTML;
        console.log(birthday);
        let today = new Date();
        let birthdate = new Date(birthday);
        birthdate.setFullYear(today.getFullYear());
        if (birthdate.getMonth() === today.getMonth() && birthdate.getDate() === today.getDate()) {
            rowToHighlight = row;
            console.log('should be breaking');
            break;
        }
        console.log('not broken');
        console.log(rowToHighlight);
        if (rowToHighlight === undefined) {
            console.log('thing 1')
            rowToHighlight = row;
        } else {
            console.log('thing 2')
            if (birthdate.getTime() - today.getTime() < new Date(rowToHighlight.cells[1].innerHTML).getTime() - today.getTime() && birthdate.getTime() - today.getTime() > 0) {
                rowToHighlight = row;
            }
        }
    }

    rowToHighlight.classList.add('highlight');
}

button.addEventListener('click', addRow);
glow.addEventListener('click', highlightNextBirthday);

