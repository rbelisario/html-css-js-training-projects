const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  disableScroll();
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  enableScroll();
});

const disableScroll = () => {
  document.body.classList.add("stop-scrolling");
};

const enableScroll = () => {
  document.body.classList.remove("stop-scrolling");
};
