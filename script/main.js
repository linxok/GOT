const GOThous = [
  {
    house: 'Arryn',
    img: './image/houses/House-Arryn-Main-Shield.PNG.png'
  },
  {
    house: 'Baratheon',
    img: './image/houses/House-Baratheon-Main-Shield.PNG.png'
  },
  {
    house: 'Greyjoy',
    img: './image/houses/House-Greyjoy-Main-Shield.PNG.png'
  },
  {
    house: 'Lannister',
    img: './image/houses/House-Lannister-Main-Shield.PNG.png'
  },
  {
    house: 'Martell',
    img: './image/houses/House-Martell-Main-Shield.PNG.png'
  },
  {
    house: 'Stark',
    img: './image/houses/House-Stark-Main-Shield.PNG.png'
  },
  {
    house: 'Targaryen',
    img: './image/houses/House-Targaryen-Main-Shield.PNG.png'
  },
  {
    house: 'Tully',
    img: './image/houses/House-Tully-Main-Shield.PNG.png'
  },
  {
    house: 'Tyrell',
    img: './image/houses/House-Tyrell-Main-Shield.PNG.png'
  }
];

document.getElementById('sign_up').addEventListener('click', (event) => {
  let form_first = document.getElementById('form_first');
  if (form_first.checkValidity() || checkPassword(password)) {
    document.getElementById('form_first').style.display = 'none';
    document.getElementById('form_second').style.display = 'flex';
    event.preventDefault(); // https://learn.javascript.ru/default-browser-action

    createOption(GOThous);
  }
});

document.getElementById('buttonSave').addEventListener('click', (event) => {
  let form_second = document.getElementById('form_second');
  if (form_second.checkValidity()) {
    document.getElementById('form_first').style.display = 'none';
    document.getElementById('form_second').style.display = 'flex';

    event.preventDefault();
  }
});

const password = document.getElementById('password');
password.addEventListener('keyup', (event) => {
  checkPassword(password.value);
});

function checkPassword(password) {
  let result = true;

  const alertText = document.getElementById('alertTxt');
  alertText.innerHTML = 'Password must contain one is ';

  if (!/([a-z]+)/.test(password)) {
    alertText.innerHTML = alertText.innerHTML + ' little character, ';
    result = false;
  }
  if (!/[A-Z]+/.test(password)) {
    alertText.innerHTML = alertText.innerHTML + ' big character, ';
    result = false;
  }
  if (!/[0-9]+/.test(password)) {
    alertText.innerHTML = alertText.innerHTML + ' number, ';
    result = false;
  }
  if (!/[!@#\$%\^&\*]+/.test(password)) {
    alertText.innerHTML = alertText.innerHTML + ' specific symbol: !@#$%^&*, ';
    result = false;
  }

  if (result) {
    alertText.innerHTML = 'Must be at least 8 < X < 18 characters';
  }

  return result;
}


function createOption(houses) {
  let option = $('#selectHouse');
  for (let element of houses) {
    option.append(`<option class="option" value='${element.house}'>${element.house}</option>`);
  }
}

