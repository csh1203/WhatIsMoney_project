idInput = document.getElementById('id-input');
pwInput = document.getElementById('pw-input');
pwCheckInput = document.getElementById('pw-check-input');
emailInput = document.getElementById('email-input');
codeInput = document.getElementById('code-input');

idButton = document.getElementById('id-button');
emailButton = document.getElementById('email-button');
codeButton = document.getElementById('code-button');

idLine = document.getElementById('id-line');
pwLine = document.getElementById('pw-line');
pwCheckLine = document.getElementById('pw-check-line');
emailLine = document.getElementById('email-line');
codeLine = document.getElementById('code-line');

idInput.onclick = idInputFocus;
pwInput.onclick = pwInputFocus;
pwCheckInput.onclick = pwCheckInputFocus;
emailInput.onclick = emailInputFocus;
codeInput.onclick = codeInputFocus;


// 아이디 중복 확인 함수
function idCheck() {
    var id = document.getElementById("id-input").value;
  
    axios
        .post("http://localhost:3000/users/check-duplicate", {
            userid: id,
        })
        .then((response) => {
        if (response.data.isDuplicate) {
            alert("이미 사용 중인 아이디입니다.");
        } else if (id.length < 8 || id.length > 15) {
            alert("아이디는 8자 이상 15자 이하로 입력해주세요.");
        }
        else {
          alert("사용 가능한 아이디입니다.")
        }
      })
      .catch((e) => {
        console.error("Error during duplicate check:", e);
        alert("에러가 발생했습니다.");
    });
  }

// 인증번호 전송 함수
function emailCheck() {
    var email = document.getElementById("email-input").value;
  
    // 아이디 중복 확인 API 엔드포인트 수정
    axios
    .post("http://localhost:3000/users/certificate", {
      email: email,
    })
    .then((response) => {
        alert("이메일을 발송했습니다.")
    })
    .catch((e) => {
    console.error("Error during duplicate check:", e);
        alert("이메일을 발송하는 도중 에러가 발생했습니다.");
    });
  }

// 인증번호 확인 함수
function codeCheck() {
    var email = document.getElementById("email-input").value;
    var authCode = document.getElementById("code-input").value; // 입력한 인증번호 가져오기
  
    if (authCode.trim() === "") {
      alert("인증번호를 입력해주세요")
    }
  
    axios
      .post("http://localhost:3000/users/checkAuthCode", {
        email: email,
        code: authCode,
      })
      .then((response) => {
        if (response.status === 200 && response.data.message === '인증번호가 확인되었습니다.') {
          isEmailVerified = true; // 이메일 인증 성공
          alert("인증번호가 확인되었습니다.")
        } else {
          isEmailVerified = false; // 이메일 인증 실패
          alert("인증번호가 일치하지 않습니다. 다시 확인해주세요.")
        }
      })
      .catch((e) => {
        console.error("Error during auth code check:", e);
        alert("에러가 발생했습니다.");
      });
  }

function finalCheck(){
    var id = document.getElementById("id-input").value;
    var email = document.getElementById("email-input").value;
    var pw = document.getElementById("pw-check-input").value;

    if(idInput.value === '') return alert('아이디를 입력해주세요');
    if(pwInput.value === '') return alert('비밀번호를 입력해주세요');
    if(pwCheckInput.value === '') return alert('비밀번호 확인을 입력해주세요');

    if(pwInput.value !== pwCheckInput.value) return alert('비밀번호를 확인해주세요');

    axios
    .post("http://localhost:3000/users/signup", { // URL 수정
        userid: id,
        pw: pw,
        email: email,
      })
      .then((response) => {
        console.log("Registration response:", response.data);
        if (response.data.message === "User registered successfully") {
          console.log("Registration successful!");
          alert("회원가입이 되었습니다.")
        } else {
          alert("인증코드가 일치하지 않습니다. 다시 확인해주세요")
        }
      })
      .catch((e) => {
        console.error("Error during registration:", e);
        alert("에러가 발생했습니다.");

        window.location.href = "/login.html";
      });
}

function idInputFocus(){
    idLine.style.background = "#A266BE";
    pwLine.style.background = "#9E9E9E";
    pwCheckLine.style.background = "#9E9E9E";
    emailLine.style.background = "#9E9E9E";
    codeLine.style.background = "#9E9E9E";

    idButton.style.borderColor = "#A266BE";
    idButton.style.color = "#A266BE";
    emailButton.style.borderColor = "#9E9E9E";
    emailButton.style.color = "#9E9E9E";
    codeButton.style.borderColor = "#9E9E9E";
    codeButton.style.color = "#9E9E9E";
}

function pwInputFocus(){
    idLine.style.background = "#9E9E9E";
    pwLine.style.background = "#A266BE";
    pwCheckLine.style.background = "#9E9E9E";
    emailLine.style.background = "#9E9E9E";
    codeLine.style.background = "#9E9E9E";

    idButton.style.borderColor = "#9E9E9E";
    idButton.style.color = "#9E9E9E";
    emailButton.style.borderColor = "#9E9E9E";
    emailButton.style.color = "#9E9E9E";
    codeButton.style.borderColor = "#9E9E9E";
    codeButton.style.color = "#9E9E9E";
}

function pwCheckInputFocus(){
    idLine.style.background = "#9E9E9E";
    pwLine.style.background = "#9E9E9E";
    pwCheckLine.style.background = "#A266BE";
    emailLine.style.background = "#9E9E9E";
    codeLine.style.background = "#9E9E9E";

    idButton.style.borderColor = "#9E9E9E";
    idButton.style.color = "#9E9E9E";
    emailButton.style.borderColor = "#9E9E9E";
    emailButton.style.color = "#9E9E9E";
    codeButton.style.borderColor = "#9E9E9E";
    codeButton.style.color = "#9E9E9E";
}

function emailInputFocus(){
    idLine.style.background = "#9E9E9E";
    pwLine.style.background = "#9E9E9E";
    pwCheckLine.style.background = "#9E9E9E";
    emailLine.style.background = "#A266BE";
    codeLine.style.background = "#9E9E9E";

    idButton.style.borderColor = "#9E9E9E";
    idButton.style.color = "#9E9E9E";
    emailButton.style.borderColor = "#A266BE";
    emailButton.style.color = "#A266BE";
    codeButton.style.borderColor = "#9E9E9E";
    codeButton.style.color = "#9E9E9E";
}
 
function codeInputFocus(){
    idLine.style.background = "#9E9E9E";
    pwLine.style.background = "#9E9E9E";
    pwCheckLine.style.background = "#9E9E9E";
    emailLine.style.background = "#9E9E9E";
    codeLine.style.background = "#A266BE";

    idButton.style.borderColor = "#9E9E9E";
    idButton.style.color = "#9E9E9E";

    emailButton.style.borderColor = "#9E9E9E";
    emailButton.style.color = "#9E9E9E";
    codeButton.style.borderColor = "#A266BE";
    codeButton.style.color = "#A266BE";
}
