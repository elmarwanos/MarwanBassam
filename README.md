# Welcome to my Personal [Portfolio/CV Website](https://elmarwanos.github.io/MarwanBassam/)

I decided to create this website to display all my career accomplishments as well as display some of my web development skills.

- If you are seeing this as a **developer** then you should already be familiar with GitHub ReadMes and GitHub in general.
- If you are seeing this as a **non-developer** then what you're looking at is a repository for the code of my personal website. 
  - Here you can see the actual programming behind the website (in the source files)
  - Explanatations to some pieces of code
  - Referenced code from other developers

## How I Created the "Falling Stars" background
While I was looking around for cool ideas for my page's background I ran across Saransh Sinha's ["Parallax Star background in CSS" Codepen.](https://codepen.io/saransh/pen/BKJun)<br>
I liked the idea so much that I recreated it in my own way because I didn't want to blatantly rip off Saransh's hard work:

HTML - an empty div to contain the stars
```
<div id="stars-container"></div>
```

CSS - a simple animation to move the stars + different star sizes/speeds
```
.star1 {
    width: 15px;
    height: 15px;
    animation: animStar 100s infinite;
}
.star2 {
    width: 7px;
    height: 7px;
    animation: animStar 300s infinite;
}
.star3 {
    width: 2px;
    height: 2px;
    animation: animStar 500s infinite;
}

@keyframes animStar {
    0% {transform: translateY(0vh); 
    100% {transform: translateY(calc(100vh));}
}
```

JS - Generate stars with random positions
```
window.onload = function () {
    addStar(20, "star1");
    addStar(40, "star2");
    addStar(120, "star3");
};

function addStar(amount, sclass) {
    for (let index = 0; index < amount; index++) {
        var tempStar = document.createElement("div");
        tempStar.className = `star ${sclass}`;
        tempStar.style.top = `${Math.random() * 300}%`;
        tempStar.style.left = `${Math.random() * 100}%`;
        $("stars-container").append(tempStar);
    }
}
```
