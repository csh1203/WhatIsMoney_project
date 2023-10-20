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
        dateItemDiv.innerHTML = i;              //<div class="date item">날짜</div>
    
        // HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
        // console.log(i);        
    }

    // 1일을 firstDateDay로 옮기자
    // .dates.container의 자식 중 첫째자식(1일) style grid-column-start; day +1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS {grid-column-start: firstDay + 1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토 : 파랑
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n + ${7 - firstDateDay})`);
    for(let dateItem of saturdayDivs){
        dateItem.style.color = "blue";
    }

    //일 : 빨강
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n + ${(7 - firstDateDay + 1) % 7})`);

    for(let dateItem of sundayDivs){
        dateItem.style.color = "red";
    }
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
