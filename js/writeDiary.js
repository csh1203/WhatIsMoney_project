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
}

function check(){
    const selectedDate = localStorage.getItem('selectedDate');
    const id = localStorage.getItem('userid');

    var category = document.getElementById('exer-unit');
    var title = document.getElementById('write-title');
    var content = document.getElementById('main-text');
    var category = document.getElementById('exer-unit');
    var spending_title = document.getElementById('plus-title');
    var income_spending = document.getElementById('plus-price');

    if(title.value === '') return alert('일기의 제목을 입력해주세요');
    if(main.value === '') return alert('일기를 작성해주세요');
    
    var coins = document.getElementsByClassName('coin');
    for(let i of coins){
        if(i.style.border == "2px solid rgb(162, 102, 190)"){
            localStorage.setItem("coin", i.id);
            // window.location.href = "/calendar.html";
            return 0;
        }
    }

    console.log(year +"-" + month + "-" + selectedDate);
    const entries = [
        { category: category,
            spending_title : spending_title,
            income_spending :income_spending }
    ]
    axios
    .post("http://localhost:3000/users/content", { // URL 수정
        userid: id,
        title : title,
        content : content,
        created_at: year + "-" + month + "-" + selectedDate,
        entries
      })
      .then((response) => {
        console.log("추가 완료");
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.");

    });

    alert('오늘의 소비 코인을 선택해주세요');
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