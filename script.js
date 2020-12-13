const flaps = document.getElementsByClassName('flap');
let {0:dateDeg,1:hoursDeg,2:minutesDeg,3:secondsDeg,4:dateLast,5:hoursLast,6:minutesLast} = new Array(7).fill(0);
const array = [[dateDeg,dateLast],[hoursDeg,hoursLast],[minutesDeg,minutesLast]];
const makeFlip = (deg, num) => {
    deg = deg == 0 ? 360 : 0;
    flaps[num].style = "transform: rotateX("+deg+"deg); transition: transform 1s;";
    return deg;
}
const flip = (last, get, deg, num) => last!=get ? makeFlip(deg, num) : deg;
window.setInterval(function(){  
    const date = new Date();
    for(let i=0;i<array.length;i++){
        const actual = i==0?date.getDate():(i==1?date.getHours():date.getMinutes());
        array[i][0] = flip(array[i][1], actual, array[i][0], i);
        array[i][1] = actual;
    }
    secondsDeg = makeFlip(secondsDeg, 3);
    flaps[0].innerHTML = 23-date.getDate();
    flaps[1].innerHTML = 23-date.getHours();
    flaps[2].innerHTML = 59-date.getMinutes();
    flaps[3].innerHTML = 59-date.getSeconds();
}, 1000);