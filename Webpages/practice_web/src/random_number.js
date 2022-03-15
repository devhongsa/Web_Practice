const maxNum = document.querySelector("#num");
const guessNum = document.querySelector("#guessNum");
const playBtn = document.querySelector("#playbtn");
const youChose = document.querySelector("#youChose");
const machineChose = document.querySelector("#machineChose");
const result = document.querySelector(".result span");
const resultForm = document.querySelector("#result_form");

const handlePlay = (event) => {
  event.preventDefault();
  const guessnum = Number(guessNum.value);
  const maxnum = Number(maxNum.value);

  if (maxNum.value === null || maxnum <= 0) {
    alert("input max number! (bigger than 0)");
    maxNum.focus();
    return false;
  }
  if (guessNum.value === null || guessnum <= 0) {
    alert("input your guess number! (bigger than 0)");
    guessNum.focus();
    return false;
  }

  if (guessnum > maxnum) {
    alert(`guess number must be less than ${maxnum}`);
    guessNum.focus();
    return false;
  }

  localStorage.setItem("guessNum", guessnum);

  const savedNum = localStorage.getItem("guessNum");
  youChose.innerText = savedNum;

  const randomNum = Math.floor(Math.random() * maxnum);

  machineChose.innerText = randomNum;

  if (guessnum !== randomNum) {
    result.innerText = "You Lost!";
  } else {
    result.innerText = "You Won!";
  }

  resultForm.classList.remove("hidden");
};

playBtn.addEventListener("click", handlePlay);
