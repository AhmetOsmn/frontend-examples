function circleBar(elemId, percent){

    let elem = document.getElementById(elemId);
    let circles = elem.querySelectorAll('circle');
    let r = circles[0].getAttribute('r');
    let circum = 2 * Math.PI * r;
    let offSet = circum - (circum * percent /100);
    circles[1].style.setProperty('--circum',circum);
    circles[1].style.setProperty('--offset', offSet);
}

circleBar('elem1', 60);