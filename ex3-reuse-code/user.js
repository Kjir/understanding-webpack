'use strict';

(function() {
    function getName() {
        return "Frank";
    }

    var div = document.createElement('div');
    div.innerText = getName();
    div.className = 'user';

    document.body.appendChild(div);
})();
