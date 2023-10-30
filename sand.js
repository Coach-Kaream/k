const btn = document.getElementById('btn');
const ul = document.getElementById('ul');
const dot = document.getElementById('dot');

btn.onclick = function(){
    ul.style.display = 'block';
    dot.style.display = 'block';
}

dot.onclick = function(){
    ul.style.display = 'none';
    dot.style.display = 'none';
}


const show = document.getElementById('show1')
const box = document.getElementById('click1')
function sam(){
    show.classList.toggle('m')
    box.classList.toggle('zht');
}


const show2 = document.getElementById('show2')
const box2 = document.getElementById('click2')
function nam(){
    show2.classList.toggle('m')
    box2.classList.toggle('zht');
}


const show3 = document.getElementById('show3')
const box3 = document.getElementById('click3')
function mam(){
    show3.classList.toggle('m')
    box3.classList.toggle('zht');
}








