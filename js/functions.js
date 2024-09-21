'user strict'

const noppa = document.getElementById('dice')
noppa.addEventListener('click', () => {
    const randomNmbr = Math.floor(Math.random() * 6) + 1
    document.querySelector('img').src = './images/' + randomNmbr + '.png'
})