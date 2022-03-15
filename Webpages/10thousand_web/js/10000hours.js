const startButton = document.querySelector(".start_btn");
const shareButton = document.querySelector(".share_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");

const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");




function saveValue() {
    localStorage.setItem("field_value", field_value.value);
}

function calculator() {
    const field_value = document.querySelector("#field_value");
    let time_value = document.querySelector("#time_value");
    let time_value_int = Number(time_value.value);

    const field_result = document.querySelector(".field_result");
    const time_result = document.querySelector(".time_result");

    if (field_value.value == "") {
        alert("입력되지 않았습니다.");
        field_value.focus();                //이 태그로 커서 포커싱 하기.
        return false;
    } else if (time_value.value == "") {
        alert('입력되지 않았습니다.');
        time_value.focus();
        return false;
    } else if (time_value_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.')
        return false;
    } else {
        result.style.display = 'none';
        loading.style.display = 'flex';
    }

    setTimeout(function () {
        result.style.display = 'flex';
        loading.style.display = 'none';
        field_result.innerText = field_value.value;
        time_result.innerText = parseInt((10000 / time_value_int), 10);
    }, 1800);
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event){                   //바깥쪽 window를 클릭했을때 창 닫기.
    if(event.target == modal){
        closeModal();
    }
}

function copyUrl() {                                //url 복사하는 코드 
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);