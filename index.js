"use strict";

export default function(timing, func){
    let id = null;

    return function (){
        if(id !== null) return;

        id = setTimeout(function(){
            id = null;
            func();
        }, timing);
    }
}