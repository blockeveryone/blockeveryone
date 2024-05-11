import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import jQuery from 'jquery';
import 'jquery-ui-dist/jquery-ui';
let $ = jQuery;

class Game {
    constructor(selector) {
        this.selector = selector
        this.root = $(this.selector)
        this.save = {
            rank: 0,
            blocks: 0,
            history: {},
        };
    }
    start() {
        // this.root.html('lets gooo');
    }
}

$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function() {
    let game = new Game("#gameplay");
    game.start();
});

