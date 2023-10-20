idInput = document.getElementById('id-input');
pwInput = document.getElementById('pw-input');

idLine = document.getElementById('id-line');
pwLine = document.getElementById('pw-line');

idInput.onclick = idFocus;
pwInput.onclick = pwFocus;

function idFocus(){
    idLine.style.background = "#A266BE";
    pwLine.style.background = "#BDBDBD";
}

function pwFocus(){
    idLine.style.background = "#BDBDBD";
    pwLine.style.background = "#A266BE";
}

function finalCheck(){
    if(idInput.value === "") return alert("아이디를 입력해주세요");
    if(pwInput.value === "") return alert("아이디를 입력해주세요");

    var id = idInput.value;
    var pw = pwInput.value;
  
      // 클라이언트 로그인 후
    axios
    .post("http://localhost:3000/users/login", {
      userid: id,
      pw: pw,
    })
    .then((response) => {
      const token = response.data.token;
      hasProfile = response.data.hasProfile; // 서버에서 받은 hasProfile 값
  
      localStorage.setItem("token", token);
      localStorage.setItem("userid", id);
  
      console.log(hasProfile);
  
  
      alert("로그인 되었습니다.");
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {      
        alert("아이디 또는 비밀번호가 일치하지 않습니다.")
  
      } else {
        alert("로그인 에러가 발생했습니다.");
  
        console.error("Error during logi?n:", error.message);
      }
    });

    // window.location.href = "/calendar.html";
}