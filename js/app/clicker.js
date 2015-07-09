define(['jquery'], function($) {
    'use strict';

    var Clicker = {
        rightSquare: $('#right-square'),
        leftSquare: $('#left-square'),
        rightClicksCount: 0,
        leftClicksCount: 0,

        init: function () {
            this.showSquares();
            this.registerClick();
        },

        showSquares: function () {
            this.rightSquare.show();
            this.leftSquare.show();
        },

        registerClick: function() {
            var that = this;
            this.rightSquare.on('click', function (e) {
                that.incrementRightCounter();
            });

            this.leftSquare.on('click', function (e) {
                that.incrementLeftCounter();
            });

        },

        incrementLeftCounter: function () {
            this.leftClicksCount++;
            this.showLeftCounter();
        },

        incrementRightCounter: function () {
            this.rightClicksCount++;
            this.showRightCounter();
        },

        showRightCounter:function() {
           this.rightSquare.find('span').text(this.rightClicksCount);
        },

        showLeftCounter: function() {
            this.leftSquare.find('span').text(this.leftClicksCount);
        }
    };

    return Clicker;
});
