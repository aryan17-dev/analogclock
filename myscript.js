var d = new Date();

setInterval(function() {
    d = new Date();
    var second = d.getSeconds() * 6; 
    var minute = d.getMinutes() * 6 + d.getSeconds() * 0.1; 
    var hour = (d.getHours() % 12) * 30 + d.getMinutes() * 0.5; 

    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}, 1000);
