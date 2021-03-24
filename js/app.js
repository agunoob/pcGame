"use strict";
const character = document.querySelector('.character');
let position = 0;

document.onkeydown = characterGo;

function characterGo(e)
{
    e = e || window.event

    //right
    if (e.keyCode == '39')
    {
        position = position + 15;
        character.style.transform = 'translateX(' + position + 'px) scaleX(1)';
    }
    //left
    else if (e.keyCode == '37')
    {
        position = position - 15;
        character.style.transform = 'translateX(' + position + 'px) scaleX(-1)';
    }
}
