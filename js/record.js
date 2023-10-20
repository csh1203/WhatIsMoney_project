var title = document.getElementById('title');
var userName = "장지아니"
title.innerText = `${userName}님, 이번달은 목표금액보다 많으 쓰셨네요!`;
 
var trans = document.getElementById('trans');
var food = document.getElementById('food');
var hobby = document.getElementById('hobby');
var another = document.getElementById('another');

function getTrans(){
    trans.style.backgroundColor = "#ECE0F2";
    food.style.backgroundColor = "white";
    hobby.style.backgroundColor = "white";
    another.style.backgroundColor = "white";
    showList('trans');
}

function getFood(){
    trans.style.backgroundColor = "white";
    food.style.backgroundColor = "#ECE0F2";
    hobby.style.backgroundColor = "white";
    another.style.backgroundColor = "white";
    showList('food');
}

function getHobby(){
    trans.style.backgroundColor = "white";
    food.style.backgroundColor = "white";
    hobby.style.backgroundColor = "#ECE0F2";
    another.style.backgroundColor = "white";
    showList('hobby');

}

function getAnother(){
    trans.style.backgroundColor = "white";
    food.style.backgroundColor = "white";
    hobby.style.backgroundColor = "white";
    another.style.backgroundColor = "#ECE0F2";
    showList('another');
}


var caa = document.getElementsByClassName('caa')[0];
function showList(key){
    document.getElementsByClassName('result')[0].style.visibility = "hidden";
    document.getElementsByClassName('result')[0].style.height = "0";
    caa.innerHTML = '';
    var caDiv = document.createElement('div');
    caDiv.className = "ca-div";

    for(let i = 0; i<2; i++){
        var ca = document.createElement('div');
        ca.className = 'ca';
        var caTitle = document.createElement('div');
        // caTitle.clasName = "caTitle";
        var title = document.createElement('div');
        title.innerText = "버스";
        title.className = "ca-title"
        var date = document.createElement('div');
        date.innerText  = "2023.10.3";
        caTitle.appendChild(title);
        caTitle.appendChild(date);
        var caPrice = document.createElement('div');
        caPrice.innerText = "700";
        caPrice.className = "caPrice"
        ca.appendChild(caTitle);
        ca.appendChild(caPrice);
        
        caDiv.appendChild(ca);
    }
    

    caa.appendChild(caDiv);
}

var goalPrice = Number(document.getElementById('goal-price').innerText);
var didPrice = Number(document.getElementById('did-price').innerText);

var d = document.getElementById('div');

var finalPrice = didPrice - goalPrice;
d.innerText = `${finalPrice}원 더 썼어요`