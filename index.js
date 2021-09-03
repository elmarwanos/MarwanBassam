const sky = document.getElementById("stars-container");
let stars = document.getElementsByClassName("star");

for (starIndex in stars) {
  stars[starIndex].style.left = `${Math.random() * window.innerWidth}px`;
  //0px = top of screen
  stars[starIndex].style.top = `${Math.random() * window.innerHeight * 4}px`;
}

function selectTitle() {
  document.getElementsByClassName("title")[0].className = "title selected";
  document.getElementsByClassName("navbar")[0].style.display = "block";
}
