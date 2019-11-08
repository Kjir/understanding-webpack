import {
    prettify
} from './util';

function getName() {
    return prettify("Frank");
}

var div = document.createElement('div');
div.innerText = getName();
div.className = 'user';

document.body.appendChild(div);
