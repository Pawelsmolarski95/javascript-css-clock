'use strict'

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60 ) * 360) + 180;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    console.log(seconds);
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);