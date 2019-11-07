'use strict';

function getName() {
    return "James";
}

var div = document.createElement('div');
div.innerText = getName();
div.className = 'author'

document.body.appendChild(div);
