console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML='HE HE';
var img=document.getElementById('madi');
var marginleft=0;
function moveright(){
    marginleft +=10;
    img.style.marginleft=marginleft+'px';
}
img.onclick = function(){
    var interval = setinterval(moveright,100) ;
}