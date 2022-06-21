const overlay = document.querySelector('#overlay');
const eventKey = document.querySelector('#eventKey');
const eventCode = document.querySelector('#eventCode');
const eventWhich = document.querySelector('#eventWhich');

window.addEventListener('keydown', e => {
    overlay.style.display = "none";
    eventKey.innerText = e.key;
    eventCode.innerText = e.code;
    eventWhich.innerText = e.which;
})