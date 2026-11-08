
const suggestion = document.getElementById('SBox')
const feedback = document.getElementById('FBox')
const m1 = document.getElementById('m1')
const m2 = document.getElementById('m2')
const m3 = document.getElementById('m3')
const m4 = document.getElementById('m4')

function showSuggestionBox() {
    suggestion.classList.add('show')
}

function talkToUS() {
    feedback.classList.add('show')
}

function closeSB() {
    suggestion.classList.remove('show')
}

function closeFB() {
    feedback.classList.remove('show')
}


function showMessage1() {
    m1.classList.add('show')
}

function showMessage2() {
    m2.classList.add('show')
}

function showMessage3() {
    m3.classList.add('show')
}


function showMessage4() {
    m4.classList.add('show')
}


function closeM1() {
    m1.classList.remove('show')
}

function closeM2() {
    m2.classList.remove('show')
}

function closeM3() {
    m3.classList.remove('show')
}

function closeM4() {
    m4.classList.remove('show')
}

