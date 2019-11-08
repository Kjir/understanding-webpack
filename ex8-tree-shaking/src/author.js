import {
    prettify,
    generateShortBio
} from './util';

function getName() {
    return prettify("James");
}

var div = document.createElement('div');
div.innerText = getName();
div.className = 'author';

const bio = document.createElement('p');
bio.innerText = generateShortBio();
div.appendChild(bio);

document.body.appendChild(div);
