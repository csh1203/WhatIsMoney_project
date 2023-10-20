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

    window.location.href = "/calendar.html";
}