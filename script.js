const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
const week = document.getElementById("week");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const cancel = document.getElementById("cancel");

const sdays = 15 * 24 * 60 * 60 * 1000;
let targetDate = new Date().getTime() + sdays;

const countDown = () => {
  const newDate = new Date().getTime();
  const timeDifference = targetDate - newDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  sec.innerHTML = seconds;
  min.innerHTML = minutes;
  hour.innerHTML = hours;
  week.innerHTML = Math.floor(days / 7);
  day.innerHTML = days;
};

cancel.style.display="none";

  menu.addEventListener("click", () => {
    nav.style.display = "flex";
    menu.style.display = "none";
    cancel.style.display = "flex";
  });

    cancel.addEventListener("click", () => {
        menu.style.display = "flex";
        nav.style.display = "none";
        cancel.style.display = "none"
      });

setInterval(countDown, 1000);
