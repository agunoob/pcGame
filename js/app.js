"use strict";
const character = document.querySelector('.character');
let position = 0;
let bigger = 1;
let jumpPosition = 96;

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
            character.style.transform = 'translateX(' + position + 'px)';
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
            character.style.transform = 'translateX(' + position + 'px)';
        }
    };
    console.log(position)

    //closer
    if (e.keyCode == '40')
    {
        if (bigger >= 15)
        {
            bigger == 15
        }
        else
        {
            bigger = bigger + 1;
            jumpPosition = jumpPosition - 6;
            console.log(bigger);
            character.style.width = 'calc(70px + ' + bigger + 'px)';
            character.style.bottom = jumpPosition + 'px';
            const stepCloser = new Audio('./sounds/step.mp3');
            stepCloser.play();
        }
    }

        //away
        if (e.keyCode == '38')
        {
            if (bigger == 1)
            {
                bigger == 1
            }
            else
            {
                bigger = bigger - 1;
                jumpPosition = jumpPosition + 6;
                console.log(bigger);
                character.style.width = 'calc(70px + ' + bigger + 'px)';
                character.style.bottom = jumpPosition + 'px';
                const stepCloser = new Audio('./sounds/step.mp3');
                stepCloser.play();
            }
        }

    //jump
    if (e.keyCode == '32')
    {
        console.log('spacja');
        // character.style.bottom = '120px';
        character.style.bottom = 'calc('+ jumpPosition + 'px + 24px';
        const jumpSound = new Audio('./sounds/jump.mp3');
        jumpSound.play();

        function waitToFall()
        {
            setTimeout(function()
            {
                // character.style.bottom = '96px';
                character.style.bottom = jumpPosition + 'px';
            }, 250);
        }
        waitToFall();
    };
}
