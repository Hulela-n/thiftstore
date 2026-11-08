const m1 = document.getElementById('message1')
const m2 = document.getElementById('message2')
const m3 = document.getElementById('message3')


function showMessage1() {
    m1.classList.add('show')
}

function showMessage2() {
    m2.classList.add('show')
}

function showMessage3() {
    m3.classList.add('show')
}

function closeMessage1() {
    m1.classList.remove('show')
}

function closeMessage2() {
    m2.classList.remove('show')
}

function closeMessage3() {
    m3.classList.remove('show')
}
