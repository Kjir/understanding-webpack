import {
    prettify
} from './util';

function getName() {
    return prettify("James");
}

var div = document.createElement('div');
div.innerText = getName();
div.className = 'author';

document.body.appendChild(div);
