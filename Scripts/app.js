"use strict";
//self-executing anonymous function
//IIFE -- Immediately Invoked Function Expression
(function(){
  let myFunctionVariable = 0;

    function Start(){
        let myLocatVariable =0;
        console.log('App Started...${myFunctionVariable}');
    }

    window.addEventListener("load",Start);
})();