"use strict";
const character = document.querySelector('.character');
let position = 0;
let bigger = 1;

document.onkeydown = characterGo;

function characterGo(e)
{
    //right
    if (e.keyCode == '39')
    {
        position = position + 20;
        character.src = './pictures/character-black-eye.png';
        character.style.transform = 'translateX(' + position + 'px)';
        const stepRight = new Audio('./sounds/step.mp3');
        stepRight.play();
        if (position >= window.innerWidth - 90)
        {
            position = window.innerWidth - 90;
            console.log('stop right');
        }
    };

    //left
    if (e.keyCode == '37')
    {
        position = position - 20;
        character.src = './pictures/character-black-eye-right.png';
        character.style.transform = 'translateX(' + position + 'px)';
        const stepLeft = new Audio('./sounds/step.mp3');
        stepLeft.play();
        if (position <= -10)
        {
            position = -10;
            console.log('stop left');
        }
    };
    console.log(position)

    // //closer
    // if (e.keyCode == '40')
    // {
    //     bigger = bigger + 0.01;
    //     character.style.transform += 'scale(' + bigger + ')';
    // }

    //jump
    if (e.keyCode == '32')
    {
        console.log('spacja');
        character.style.bottom = '120px';
        const jumpSound = new Audio('./sounds/jump.mp3');
        jumpSound.play();

        function waitToFall()
        {
            setTimeout(function()
            {
                character.style.bottom = '96px';
            }, 250);
        }
        waitToFall();
    };
}
