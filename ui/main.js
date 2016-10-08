console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML = "new content";

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}

var idel = document.getElementById("madi");
idel.onclick = function(){
    var interval = setInterval(moveRight,100);
}