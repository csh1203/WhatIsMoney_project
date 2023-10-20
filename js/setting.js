goalnput = document.getElementById('goal-input');

function check(){
    if(goalnput.value === '') return alert('목표금액을 설정해주세요')
    if(isNaN(goalnput.value)) return alert('목표금액을 다시 입력해주세요')
    window.location.href = "/calendar.html"
}