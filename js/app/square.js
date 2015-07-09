/**
 * Created by aldoescudero on 18/6/15.
 */
/** WIP
define('Square', function($) {
    'use strict';

    var Square = {
        elementName: "",
        className: "",
        clickCount: 0,

        init: function init (elementName,className){
            this.elementName = elementName;
            this.className = className;
        },

        incrementCounter: function incrementCounter(e){
            e.clickCount++;
        },
        registerClick: function registerClick(){
            this.on('click', this.incrementCounter());
        }
    };
    return Square;
});
**/