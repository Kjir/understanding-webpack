import {
    generateLongBio
} from './util'

function getName() {
    return "James";
}

function addAuthor() {
    var div = document.createElement('div');
    div.innerText = getName();
    div.className = 'author';

    const button = document.createElement('button');
    button.innerText = 'Show Bio';
    button.onclick = function() {
        const bio = document.createElement('p');
        bio.innerText = generateLongBio();
        div.appendChild(bio);
    }

    div.appendChild(button);


    document.body.appendChild(div);
}

export default addAuthor;
