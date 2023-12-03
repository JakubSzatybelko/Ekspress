
const btn = document.querySelector('#save');
const input = document.querySelector('#input');

const showPopup = () => {
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 1000)
}

const load = () => {
    fetch('/load').then(res => res.json())
    .then(data => {
        input.value = JSON.parse(data).data
        showPopup();
    }).catch(err => console.log(err))
}
load();

btn.addEventListener('click', () => {
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: input.value})
    })
    .then(res => res.json())
    .then(data => console.log(data), load())
    .catch(err => console.log(err))
})

