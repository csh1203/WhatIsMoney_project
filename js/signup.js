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

function idCheck(){

}

function emailCheck(){

}

function codeCheck(){

}

function finalCheck(){
    if(idInput.value === '') return alert('아이디를 입력해주세요');
    if(pwInput.value === '') return alert('비밀번호를 입력해주세요');
    if(pwCheckInput.value === '') return alert('비밀번호 확인을 입력해주세요');

    if(pwInput.value !== pwCheckInput.value) return alert('비밀번호를 확인해주세요')
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
