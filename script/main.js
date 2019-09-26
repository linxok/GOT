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
  if (form_first.checkValidity()) {
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

function createOption(houses) {
  let option = $('#selectHouse');
  for (let element of houses) {
    option.append(`<option class="option" value='${element.house}'>${element.house}</option>`);
  }
}