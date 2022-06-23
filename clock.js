setInterval(() =>{
    let hrs = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh= document.getElementById("hh");
    let mm= document.getElementById("mm");
    let ss= document.getElementById("ss");

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = ap;

    hh.style.strokeDashoffset=315- (315*h)/12;
    mm.style.strokeDashoffset=315- (315*m)/60;
    ss.style.strokeDashoffset=315- (315*s)/60;

    hr_dot.style.transform =  `rotate(${h * 30}deg)`;
    min_dot.style.transform =  `rotate(${m * 6}deg)`;
    sec_dot.style.transform =  `rotate(${s * 6}deg)`;
})

