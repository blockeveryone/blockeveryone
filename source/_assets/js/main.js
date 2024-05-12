import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import jQuery from 'jquery';
import 'jquery-ui-dist/jquery-ui';
let $ = jQuery;
import {Howl, Howler} from 'howler';

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
    let saveHandle = 'save';

    let save = {
        cardsUntilNextLevel: 2,
        totalCardsCompleted: 0,
        currentLevel: 0,
        history: [],
    };

    let titles = [
        'Intern',
        'Manager',
        'Shogun',
        'Maestro',
        'Warrior',
        'Kingpin',
        'Grand Poobah',
    ];

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    function changeCard() {
        if (currentCard) {
            save.history.push(currentCard['Name']);
        }
        let isCardSet = false;
        while (isCardSet === false) {
            currentId = (Math.floor(Math.random() * collection.length));
            if (!save.history.includes(collection[currentId]["Name"])) {
                currentCard = collection[currentId];
                isCardSet = true;
            }
        }
        currentCard = collection[currentId];
    }

    function updateCard() {
        $("#card-title").html(currentCard["Name"]);
        $("#photo").css({'background-image': `url("/assets/cards/${currentCard["hash"]}.jpg")`});

        if (currentCard["Instagram"].length < 3) {
            $("#instagram").attr('href', '').hide();
        } else {
            $("#instagram").attr('href', currentCard["Instagram"]).show();
        }

        if (currentCard["Tiktok"].length < 3) {
            $("#tiktok").attr('href', '').hide();
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
        localStorage.setItem(saveHandle, JSON.stringify(save));
    }

    function levelUp() {
        save.currentLevel++;
        $('#reward-screen-title').html('Level Up!');
        $('#reward-screen-rank-img').attr('src', `/assets/img/rank_${save.currentLevel}.png`);
        $('#reward-screen-tagline').html('- NEW RANK -');
        $('#reward-screen-rank-title').html(titles[save.currentLevel]);
        $('#reward-screen-level').html("Level "+(save.currentLevel + 1));
        $('#level-up-ok').html('Keep Blocking!');
        $("#reward-screen").fadeIn();
    }

    if (localStorage.getItem(saveHandle)) {
        save = JSON.parse(localStorage.getItem(saveHandle));
        $('#reward-screen-title').html('Welcome Back!');
        $('#reward-screen-rank-img').attr('src', `/assets/img/rank_${save.currentLevel}.png`);
        $('#reward-screen-tagline').html('- CURRENT RANK -');
        $('#reward-screen-rank-title').html(titles[save.currentLevel]);
        $('#reward-screen-level').html("Level "+(save.currentLevel + 1));
        $('#level-up-ok').html('Continue Game');
        $("#reward-screen").fadeIn();
    } else {
        $('#reward-screen-title').html('Block<br/>Everyone');
        $('#reward-screen-rank-img').attr('src', `/assets/img/rank_0.png`);
        $('#reward-screen-tagline').html('BLOCK ACCOUNTS<br/>TO INCREASE YOUR RANK');
        $('#reward-screen-rank-title').html(titles[0]);
        $('#reward-screen-level').html("Level 1");
        $('#level-up-ok').html('Start Game');
        $("#reward-screen").fadeIn();
    }

    $.get('/assets/data/list.json', function(data) {
        collection = data;
        changeCard();
        updateCard();
        updateInterface();
    });

    $("#save-button").click(function() {
        $(".card-wrapper").animate({left: "-=100%", opacity: 0}, 200, function() {
            $(".card-wrapper").hide();
            changeCard();
            updateCard();
            recordProgress();
            updateInterface();
            $("#pack-screen")
                .show()
                .css({opacity:0, top:0, right:"-100%"})
                .animate({opacity: 1, right:0}, 100, function() {
                    if ($(window).width() <= 490) {
                        $(".card-wrapper").css({left:"-5%", opacity:1}).show();
                    } else {
                        $(".card-wrapper").css({left:0, opacity:1}).show();
                    }
                });
        });
    });

    $("#level-up-ok").click(function() {
        $("#reward-screen").fadeOut();
    });

    $("#pack-screen").click(function() {
        $("#pack-screen").animate({top: "+=100%"}, 500, function() {
            $("#pack-screen").hide();
        });
    });
});

