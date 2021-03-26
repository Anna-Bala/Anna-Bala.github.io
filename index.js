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
  const navbar = document.querySelector('.navbar');
  navbar.scrollIntoView({behavior: "smooth"});
}

const controlTitle = () => {
 const navbarCollapse = document.querySelector('.navbar-collapse');
 const navbarClassesLength = navbarCollapse.classList.length;
 const title = document.querySelector('h1');
 if(navbarClassesLength === 2) {
   title.innerHTML = '';
 } else if (navbarClassesLength === 3 ) {
  title.innerHTML = 'Coffee Nook';
 }
 console.log('aha');
}