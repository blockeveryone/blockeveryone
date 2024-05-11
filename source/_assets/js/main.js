import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import jQuery from 'jquery';
import 'jquery-ui-dist/jquery-ui';
let $ = jQuery;

$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function()
{
    let collection = {};
    let currentId = 0;
    let currentCard = null;

    let save = {
        cardsUntilNextLevel: 3,
        totalCardsCompleted: 0,
        currentLevel: 0,
        history: [],
    };

    let titles = [
        'Intern',
        'Assistant Regional Manager',
        'Shogun',
        'Maestro',
        'Warrior',
        'Kingpin',
        'Grand Poobah',
    ];

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    function quickhash(str) {
        let hash = 0;
        if (str.length === 0) return hash;
        let i;
        for (i = 0; i < str.length; i++) {
            let char;
            char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    function changeCard() {
        if (currentCard) {
            save.history.push(currentCard['Name']);
        }
        currentId = (Math.floor(Math.random() * collection.length));
        currentCard = collection[currentId];
    }

    function updateCard() {
        $("#card-title").html(currentCard["Name"]);
        $("#photo").css({'background-image': 'url("https://picsum.photos/seed/'+quickhash(currentCard["Name"])+'/460/700")'});

        if (currentCard["Instagram"].length < 3) {
            $("#instagram").attr('href', '').hide();
        } else {
            $("#instagram").attr('href', currentCard["Instagram"]).show();
        }

        if (currentCard["Tiktok"].length < 3) {
            $("#tiktok").html('TikTok (Search)').attr('href', 'https://www.tiktok.com/search/user?q='+currentCard["Name"]).show();
        } else {
            $("#tiktok").html('TikTok').attr('href', currentCard["Tiktok"]).show();
        }

        if (currentCard["Twitter (X)"].length < 3) {
            $("#twitter").attr('href', '').hide();
        } else {
            $("#twitter").attr('href', currentCard["Twitter (X)"]).show();
        }
    }

    function updateInterface() {
        $("#progress-bar").css({width: percentage(save.totalCardsCompleted, save.cardsUntilNextLevel)+"%"});
        $("#progress-left").html((save.cardsUntilNextLevel - save.totalCardsCompleted)+" LEFT");
        $("#player-rank-icon").attr('src', '/assets/img/rank_'+save.currentLevel+'.png');
        $("#player-rank-name").html(titles[save.currentLevel]+" <small>(LV."+(save.currentLevel+1)+")</small>");
    }

    function recordProgress() {
        save.totalCardsCompleted++;
        if (save.totalCardsCompleted >= save.cardsUntilNextLevel) {
            save.cardsUntilNextLevel = save.cardsUntilNextLevel * 2;
            save.totalCardsCompleted = 0;
            levelUp();
        }
        localStorage.setItem("save", JSON.stringify(save));
    }

    function levelUp() {
        alert("leveled up! show animations");
        save.currentLevel++;
    }

    if (localStorage.getItem('save')) {
        save = JSON.parse(localStorage.getItem('save'));
    }

    $.get('/assets/data/list.json', function(data) {
        collection = data;
        changeCard();
        updateCard();
        updateInterface();
    });

    $("#save-button").click(function () {
        changeCard();
        updateCard();
        recordProgress();
        updateInterface();
    });
});

