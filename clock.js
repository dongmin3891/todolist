const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function dayName() {
  const date1 = new Date(); //datd를 불러오는 객체선언
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const day = date1.getDay(); //date객체 안에 있는 getday 함수선언
  //for / if
  for (let i = 0; i < dayNames.length + 1; i++) {
    if (day === i) {
      return dayNames[day - 1];
    }
  }
}

function getTime() {
  const today = new Date(); //클래스
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  const seconds = today.getSeconds();
  clockTitle.innerText = `${year}/${month < 10 ? `0${month}` : month}/${
    date < 10 ? `0${date}` : date
  }/${dayName()} ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
