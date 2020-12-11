const flaps = document.getElementsByClassName('flap');
let daysDeg = 0;
let hoursDeg = 0;
let minutesDeg = 0;
let secondsDeg = 0;
let daysLast = 0;
let hoursLast = 0;
let minutesLast = 0;
function flip(last, get, deg, num){
    if(last!=get){
        deg = deg == 0 ? 360 : 0;
        flaps[num].style = "transform: rotateX("+deg+"deg); transition: transform 1s;";
        return deg
    } else {
        return deg
    }
}
window.setInterval(function(){  
    const date = new Date();
    daysDeg = flip(daysLast, date.getDate(), daysDeg, 0);
    hoursDeg = flip(hoursLast, date.getHours(), hoursDeg, 1);
    minutesDeg = flip(minutesLast, date.getMinutes(), minutesDeg, 2);
    daysLast = date.getDate();
    hoursLast = date.getHours();
    minutesLast = date.getMinutes();
    secondsDeg = secondsDeg == 0 ? 360 : 0;
    flaps[3].style = "transform: rotateX("+secondsDeg+"deg); transition: transform 1s;";
    flaps[0].innerHTML = 23-date.getDate();
    flaps[1].innerHTML = 23-date.getHours();
    flaps[2].innerHTML = 59-date.getMinutes();
    flaps[3].innerHTML = 59-date.getSeconds();
}, 1000);