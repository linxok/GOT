document.getElementById('form_first').addEventListener('click', (event) => {
    let form_first = document.getElementById('form_first');
    if (form_first.checkValidity()) {
        document.getElementById('form_first').style.display = 'none';
        document.getElementById('form_second').style.display = 'flex';
        console.log("next form");
        event.preventDefault(); // https://learn.javascript.ru/default-browser-action
    }
});

document.getElementById('form_second').addEventListener('click', (event) => {
    let form_second = document.getElementById('form_second');
    if (form_second.checkValidity()) {
        document.getElementById('form_first').style.display = 'none';
        document.getElementById('form_second').style.display = 'flex';
        console.log("next form");
        event.preventDefault();
    }
});