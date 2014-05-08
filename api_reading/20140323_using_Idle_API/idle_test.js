'use strict';

var idle = {
    time: 3,
    onidle: function () { output('onidle'); },
    onactive: function () { output('onactive'); }
};
function output(message) {
    var o = document.getElementById('output');
    var p = document.createElement('p');
    p.innerHTML = message;
    o.appendChild(p);
    console.log(message);
}
function setIdleObserver() {
    output('setIdleObserver');
    if (navigator.addIdleObserver) {
        output('addIdleObserver');
        navigator.addIdleObserver(idle);
    }
}
function unsetIdleObserver() {
    output('unsetIdleObserver');
    if (navigator.removeIdleObserver) {
        output('removeIdleObserver');
        navigator.removeIdleObserver(idle);
    }
}
function init() {
    var addButton = document.getElementById('add');
    addButton.addEventListener('click', setIdleObserver);
    var removeButton = document.getElementById('remove');
    removeButton.addEventListener('click', unsetIdleObserver);
}

window.onload = init;

