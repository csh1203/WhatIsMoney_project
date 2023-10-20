var plusBtn = document.getElementById('plus_btn');
var title = document.getElementById('write-title');
var main = document.getElementById('main-text');
var plusDiv = document.getElementById('plus-div');

// 현재 날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var month = now.getMonth() + 1;
// 현재 월
var year = now.getFullYear();

let choicedId = "";

function plus(){
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

    choicedId = event.target.id;
}

function check() {
    // 현재 날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var month = now.getMonth() + 1;
// 현재 월
var year = now.getFullYear();
    const selectedDate = localStorage.getItem('selectedDate');
    const userid = localStorage.getItem('userid');
    const title = document.getElementById('write-title').value;
    const content = document.getElementById('main-text').value;
    const category = document.getElementById('exer-unit').value;
    const spending_title = document.getElementById('plus-title').value;
    const income_spending = document.getElementById('plus-price').value;

    let status_today = "";

    if(title.value === '') return alert('일기의 제목을 입력해주세요');
    if(main.value === '') return alert('일기를 작성해주세요');
    
     console.log({
        userid: userid,
        selectedDate: selectedDate,
        title: title,
        content: content,
        });

    var coins = document.getElementsByClassName('coin');
    console.log(coins);
    console.log(title);
    const entries = [
        {
            category: category,
            spending_title: spending_title,
            income_spending: income_spending
        }
    ];
    console.log({
        userid: userid,
        selectedDate: year + "-" + month + "-" + selectedDate,
        title: title,
        content: content,
        status_today: choicedId,
        });
    axios.post("http://localhost:3000/users/saveAccountEntry", {
        userid: userid,
        selectedDate: year + "-" + month + "-" + selectedDate,
        title: title,
        content: content,
        entries: entries,
        status_today : choicedId
    })
    .then((response) => {
        console.log(response);
        console.log("가계부 항목이 성공적으로 저장되었습니다.");
        // 여기에서 필요한 후속 조치를 취할 수 있습니다.
    })
    .catch((error) => {
        console.error("가계부 항목을 저장하는 중 오류 발생:", error);
        alert("가계부 항목을 저장하는 중 오류가 발생했습니다.");
    });
}

var option = document.getElementById('exer-unit');
var titlee = document.getElementById('plus-title');
var pricee = document.getElementById('plus-price');


function closeDiv(){
    console.log(option.value);
    console.log(titlee.value);
    console.log(pricee.value);
    plusDiv.style.visibility = "hidden";

    let priceDiv = document.createElement('div');
    let innerDiv = document.createElement('div');
    innerDiv.className = "price-inner-div"
    innerDiv.innerHTML = `<div id = "name">${option.value}</div><div id="total"><div>${titlee.value}</div><div>${pricee.value}</div></div>`;
    priceDiv.className = "price-div";
    priceDiv.appendChild(innerDiv);

    
    plusBtn.before(priceDiv);
}

function backBtn(){
    window.location.href = '/calendar.html'
}