var type = 'The digital landscape is ever-evolving, and I am committed to staying on the cutting edge. I eagerly embrace new technologies and methodologies to keep my skills sharp and my projects ahead of the curve.My mission is to bring ideas to life through code, transforming visions into pixel-perfect realities.'
var speed = 10;
var i = 0;

function typing()
{
    document.getElementById('type').style.display = 'block';
    document.getElementById('type').innerHTML += type.charAt(i);
    i++;
    setTimeout(typing,speed);
}

function scroll()
{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById('up').style.display = 'flex';
    }
    else{
        document.getElementById('up').style.display = 'none';
    }
}

window.onscroll = function() {scroll()}

function topScroll()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}