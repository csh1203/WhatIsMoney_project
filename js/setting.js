goalnput = document.getElementById('goal-input');

function check(){
    if(goalnput.value === '') return alert('목표금액을 설정해주세요')
    if(isNaN(goalnput.value)) return alert('목표금액을 다시 입력해주세요')

    var consume_month = document.getElementById("goal-input").value;
    const id = localStorage.getItem('userid');
  
    axios
        .post("http://localhost:3000/users/setProfile", {
            userid: id,
            consume_month, consume_month
        })
        .then((response) => {
            console.log('프로필이 업데이트되었습니다.', response.data);
          })
          .catch((error) => {
            // 업데이트 중 오류 발생 시 처리
            console.error('프로필 업데이트 중 오류 발생', error);
            // 에러 처리 (예: 오류 메시지 표시)
        });
    window.location.href = "/calendar.html"
}