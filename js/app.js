"use strict";
const character = document.querySelector('.character');
let position = 0;
let bigger = 1;
let jumpPosition = 96;

document.onkeydown = characterMove;

function characterMove(e)
{
    goRight(e);
    goLeft(e);
    goAway(e);
    goCloser(e);
    jump(e);
    console.log(position);
};

function goRight(e)
{
    if (e.keyCode == '39')
    {
        if (position >= window.innerWidth - 100)
        {
            position = window.innerWidth - 100;
            console.log('stop right');
            character.style.transform = 'translateX(' + position + 'px)';
        }
        else
        {
            position = position + 20;
            character.src = './pictures/character-black-eye.png';
            character.style.transform = 'translateX(' + position + 'px)';
            const stepRight = new Audio('./sounds/step.mp3');
            stepRight.play();
        }
    }
};

function goLeft(e)
{
   if (e.keyCode == '37')
    {
        if (position <= -20)
        {
            position = -20;
            console.log('stop left');
            character.style.transform = 'translateX(' + position + 'px)';
        }
        else
        {
            position = position - 20;
            character.src = './pictures/character-black-eye-right.png';
            character.style.transform = 'translateX(' + position + 'px)';
            const stepLeft = new Audio('./sounds/step.mp3');
            stepLeft.play();
        }
    }
};

function goAway(e)
{
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
            character.src = './pictures/character-back.png';
            character.style.width = 'calc(70px + ' + bigger + 'px)';
            character.style.bottom = jumpPosition + 'px';
            const stepCloser = new Audio('./sounds/step.mp3');
            stepCloser.play();
        }
    }
};

function goCloser(e)
{
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
            character.src = './pictures/character-black-eye-right.png';
            character.style.width = 'calc(70px + ' + bigger + 'px)';
            character.style.bottom = jumpPosition + 'px';
            const stepCloser = new Audio('./sounds/step.mp3');
            stepCloser.play();
        }
    }
};

function jump(e)
{
    if (e.keyCode == '32')
    {
        console.log('spacja');
        character.style.bottom = 'calc('+ jumpPosition + 'px + 24px';
        const jumpSound = new Audio('./sounds/jump.mp3');
        jumpSound.play();

        function waitToFall()
        {
            setTimeout(function()
            {
                character.style.bottom = jumpPosition + 'px';
            }, 250);
        }
        waitToFall();
    }
};
