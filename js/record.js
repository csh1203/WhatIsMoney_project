var title = document.getElementById('title');
var userName = "장지아니"
title.innerText = `${userName}님, 이번달은 목표금액보다 많으 쓰셨네요!`;
 
var trans = document.getElementById('trans');
var food = document.getElementById('food');
var hobby = document.getElementById('hobby');
var another = document.getElementById('another');

let Pfood = 0;
let Ptrans = 0;
let Phobby = 0;
let Panother = 0;

let sum = 0;

// 메시지 불러오기
function getcontent() {
    const userid = localStorage.getItem("userid");

    axios.post('http://localhost:3000/users/getcontent', {
        userid: userid,
    })
    .then((response) => {
        // 서버로부터 받은 응답 데이터를 콘솔에 출력
        console.log(response.data);
        Ptrans = response.data.data[1]['income_spending'];
        Pfood = response.data.data[0]['income_spending'];
        console.log(response.data.data[0]['income_spending']);

        document.getElementsByClassName('result-price')[0].innerText = `${Ptrans}`;
        document.getElementsByClassName('result-price')[1].innerText = `${Pfood}`;
        document.getElementsByClassName('result-price')[2].innerText = `${Phobby}`;
        document.getElementsByClassName('result-price')[3].innerText = `${Panother}`;
        sum = Number(Ptrans) + Number(Pfood) + Number(Phobby) + Number(Panother);
        
        var d = document.getElementById('did-price');
        d.innerText = `${sum}`

        var d = document.getElementById('div');
        
        var finalPrice = sum - goalPrice;
        d.innerText = `${finalPrice}원 더 썼어요`


    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류:', error);
    });
}

// 메시지 불러오기
function gettraffic() {
    const userid = localStorage.getItem("userid");

    axios.post('http://localhost:3000/users/gettraffic', {
        userid: userid,
    })
    .then((response) => {
        // 서버로부터 받은 응답 데이터를 콘솔에 출력
        console.log(response.data);


    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류:', error);
    });
}

// 메시지 불러오기
function geteat() {
    const userid = localStorage.getItem("userid");

    axios.post('http://localhost:3000/users/geteat', {
        userid: userid,
    })
    .then((response) => {
        // 서버로부터 받은 응답 데이터를 콘솔에 출력
        console.log(response.data);


    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류:', error);
    });
}
// 메시지 불러오기
function gethobby() {
    const userid = localStorage.getItem("userid");

    axios.post('http://localhost:3000/users/gethobby', {
        userid: userid,
    })
    .then((response) => {
        // 서버로부터 받은 응답 데이터를 콘솔에 출력
        console.log(response.data);


    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류:', error);
    });
}

// 메시지 불러오기
function getetc() {
    const userid = localStorage.getItem("userid");

    axios.post('http://localhost:3000/users/getetc', {
        userid: userid,
    })
    .then((response) => {
        // 서버로부터 받은 응답 데이터를 콘솔에 출력
        console.log(response.data);


    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류:', error);
    });
}

getcontent();
gettraffic();
geteat();
getthobby();
getetc();



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


console.log(sum);
// var sum = document.getElementsByClassName('result-price').reduce((a, c) => a + c);
// console.log(sum);

