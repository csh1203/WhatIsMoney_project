var plusBtn = document.getElementById('plus_btn');
var title = document.getElementById('write-title');
var main = document.getElementById('main-text');
var plusDiv = document.getElementById('plus-div');
function plus(){
    let priceDiv = document.createElement('div');
    let innerDiv = document.createElement('div');
    innerDiv.className = "price-inner-div"
    // innerDiv.innerHTML = `<div id = "name">총금액</div><div id="total">${event.target.innerHTML}</div>`;
    priceDiv.className = "price-div";
    priceDiv.appendChild(innerDiv);

    
    plusBtn.before(priceDiv);

    plusDiv.style.visibility = "visible";
}

function coinChoice(event){
    var coins = document.getElementsByClassName('coin');
    event.target.style.border = "2px solid #A266BE";
    for(let s of coins){
        if(event.target != s){
            s.style.border = "none";
        }
    }
}

function check(){
    if(title.value === '') return alert('일기의 제목을 입력해주세요');
    if(main.value === '') return alert('일기를 작성해주세요');
    
    var coins = document.getElementsByClassName('coin');
    for(let i of coins){
        if(i.style.border == "2px solid rgb(162, 102, 190)"){
            window.location.href = "/calendar.html";
            return 0;
        }
    }

    alert('오늘의 소비 코인을 선택해주세요');
}