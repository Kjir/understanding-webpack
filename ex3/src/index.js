import {
    header
} from './header';
import {
    main
} from './main';
import {
    footer
} from './footer';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
});
