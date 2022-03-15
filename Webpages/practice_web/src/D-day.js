const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const date = new Date();
  const year = date.getFullYear();
  let xmas = new Date(year, 11, 25);

  if (date > xmas) {
    xmas = new Date(year + 1, 11, 25);
  }

  const dday = xmas - date;
  const day = Math.floor(dday / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((dday / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((dday / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((dday / 1000) % 60)
    .toString()
    .padStart(2, "0");

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(dDay, 1000);
