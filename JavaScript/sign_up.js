function idCheck() {
    // input 이니까 value
    const id = document.getElementById('id').value;
    console.log(id);

    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/

    // span 이니까 innerHTML
    const idCheck = document.getElementById('idCheck');
    
    const idLength = id.length;
    if (idLength == 0) {
        idCheck.innerHTML ='필수요소입니다.'
        idCheck.style.color = 'red';
    } else if (idLength < 8 || idLength > 20) {
        idCheck.innerHTML = '8 ~ 20자 이내로 입력하세요'
        idCheck.style.color = 'red';
    } else {
        idCheck.innerHTML = '적절한 아이디입니다.'
        idCheck.style.color = 'green';
    }
}

function pwCheck() {
    const pw = document.getElementById('pw').value;
    console.log(pw);

    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-_!@#])(?=.*\d)[a-z\d]{6,10}$/

    const pwCheck = document.getElementById('pwCheck');
    
    const pwLength = pw.length;

}

function pwCheckResult() {

}

function email() {

}

function record() {

}

function phone() {
    const exp = /^d{3}-\d{4}-\d{4}$/;
}