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
    let currentCard = {};
    let cardsUntilNextLevel = 5;
    let totalCardsCompleted = 0;
    let currentLevel = 0;

    let titles = [
        'Intern',
        'Assistant Regional Manager',
        'Shogun',
        'Maestro',
        'Archduke',
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
        currentId = (Math.floor(Math.random() * collection.length));
        currentCard = collection[currentId];
    }

    function updateCard() {
        $("#card-title").html(currentCard["Name"]);
        console.log(currentCard["Instagram"], currentCard["Instagram"].length, 'instagram');
        if (currentCard["Instagram"].length < 3) {
            $("#instagram").attr('href', '').css({visibility: 'hidden'});
        } else {
            $("#instagram").attr('href', currentCard["Instagram"]).css({visibility: 'visible'});
        }
        console.log(currentCard["Tiktok"], currentCard["Tiktok"].length, 'tiktok');
        if (currentCard["Tiktok"].length < 3) {
            $("#tiktok").html('TikTok (Search)').attr('href', 'https://www.tiktok.com/search/user?q='+currentCard["Name"]).css({visibility: 'visible'});
        } else {
            $("#tiktok").html('TikTok').attr('href', currentCard["Tiktok"]).css({visibility: 'visible'});
        }
        console.log(currentCard["Twitter (X)"], currentCard["Twitter (X)"].length, 'tiktok');
        if (currentCard["Twitter (X)"].length < 3) {
            $("#twitter").attr('href', '').css({visibility: 'hidden'});
        } else {
            $("#twitter").attr('href', currentCard["Twitter (X)"]).css({visibility: 'visible'});
        }
        $("#photo").css({'background-image': 'url("https://picsum.photos/seed/'+quickhash(currentCard["Name"])+'/482/738")'});
    }

    function updateInterface() {
        $("#progress-bar").css({width: percentage(totalCardsCompleted, cardsUntilNextLevel)+"%"});
        $("#progress-left").html((cardsUntilNextLevel - totalCardsCompleted)+" LEFT");
        $("#player-rank-icon").attr('src', '/assets/img/rank_'+currentLevel+'.png');
        $("#player-rank-name").html(titles[currentLevel]+" <small>(LV."+(currentLevel+1)+")</small>");
    }

    function recordProgress() {
        totalCardsCompleted++;
        if (totalCardsCompleted >= cardsUntilNextLevel) {
            cardsUntilNextLevel = cardsUntilNextLevel * 2;
            totalCardsCompleted = 0;
            levelUp();
        }
    }

    function levelUp() {
        alert("leveled up!");
        currentLevel++;
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

