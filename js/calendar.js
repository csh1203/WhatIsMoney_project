var plusBtn = document.getElementById('plus-btn')

// 이번달
// 현재 날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var month = now.getMonth() + 1;
// 현재 월
var year = now.getFullYear();
// 현재 일
var date = now.getDate();

document.getElementsByClassName('month')[0].onclick = () => {
    year = now.getFullYear();
    month = now.getMonth() + 1;
    setCalendar(year, month);
}

const setCalendar = (year, month) => {
    // 제목 달 보여주자
    document.getElementsByClassName('month')[0].innerHTML = `${year}년 ${month}월`;
    // const datesContainerDiv = document.getElementsByClassName('dates container')[0];
    const datesContainerDiv = document.querySelectorAll('.dates.container')[0];
    
    // 해당 월의 1일이 무슨 요일
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    // 해당 월의 마지막 날짜가 며칠? : 다음 달의 1일 하루 전날 (0일)
    var lastDate = new Date(year, month, 0).getDate();

    // 원래 있던 달력의 .date.item clear
    datesContainerDiv.replaceChildren();
    //.date.item{$}*lastDate
    for(let i = 1; i<=lastDate; i++){  
        //<div class="date item">date</div>
        let dateItemDiv = document.createElement('div');
        // dateItemDiv.className = "date item";
        dateItemDiv.classList.add("date");      //<div class="date">date</div>
        dateItemDiv.classList.add("item");      //<div class="item">date</div>
        dateItemDiv.onclick = (event) => plus(event);
        dateItemDiv.innerHTML = String(i).padStart(2, 0);              //<div class="date item">날짜</div>
    
        // HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
        // console.log(i);        
    }

    // 1일을 firstDateDay로 옮기자
    // .dates.container의 자식 중 첫째자식(1일) style grid-column-start; day +1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS {grid-column-start: firstDay + 1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

} 
setCalendar(year, month);

// <:이전달
// >:이후달
const leftDiv = document.getElementsByClassName('left')[0];
leftDiv.onclick = () => {
    month--;
    if(month == 0){
        year--;
        month = 12;
    }
    setCalendar(year, month);
};

const rightDiv = document.getElementsByClassName('right')[0]
rightDiv.onclick = () => {
    month++;
    if(month == 13){
        year++;
        month = 1;
    }
    setCalendar(year, month);
};

function plus(event){

    // 선택된 날짜
    const selectedDate = event.target.innerHTML;

    // 로컬 스토리지에 저장
    localStorage.setItem('selectedDate',selectedDate);

    console.log(selectedDate);
    
    document.getElementsByClassName('price-div')[0].remove();
    let priceDiv = document.createElement('div');
    // priceDiv.innerText = `${event.target.innerHTML}`
    let innerDiv = document.createElement('div');
    innerDiv.className = "price-inner-div"
    innerDiv.innerHTML = `<div id = "name">총금액</div><div id="total">${event.target.innerHTML}</div>`;
    priceDiv.className = "price-div";
    priceDiv.appendChild(innerDiv);

    
    plusBtn.before(priceDiv);
}

function addDiary(){
    window.location.href = "/writeDiary.html";
}

// 클라이언트에서 컨트롤러 호출
function getUserData() {
    const userid = localStorage.getItem("userid"); // 현재 사용자의 아이디 또는 식별자
    axios.post('http://localhost:3000/users/getUserData', {
        userid: userid
    })
    .then((response) => {
        const data = response.data.data; // 서버에서 반환한 데이터

        // 데이터를 사용하거나 표시할 수 있음
        console.log("불러온 데이터:", data);
        var day = Number(data[0]['created_at'].substring(8, 10)) + 6
        console.log(data[0]['status_today'])
        if(data[0]['status_today'] == "good"){
            document.getElementsByClassName('item')[day].innerHTML = `<img src="/images/coin1.png">`
        }else if(data[0]['status_today'] == "fine"){
            document.getElementsByClassName('item')[day].innerHTML = `<img src="/images/coin2.png">`
        }else if(data[0]['status_today'] == "soso"){
            document.getElementsByClassName('item')[day].innerHTML = `<img src="/images/coin3.png">`
        }else if(data[0]['status_today'] == "poor"){
            document.getElementsByClassName('item')[day].innerHTML = `<img src="/images/coin4.png">`
        }else if(data[0]['status_today'] == "bad"){
            document.getElementsByClassName('item')[day].innerHTML = `<img src="/images/coin5.png">`
        }
    })
    .catch((error) => {
        console.error('데이터 불러오기 중 오류:', error);
    });
}

getUserData();