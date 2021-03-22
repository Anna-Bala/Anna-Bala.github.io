startButton = document.querySelector(".start-button");

window.onscroll = () => {scroll()};

const scroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    startButton.style.display = "block";
  } else if (document.body.scrollTop < 300 || document.documentElement.scrollTop < 300) {
    startButton.style.display = "none";
  }
}

const goToStart = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}