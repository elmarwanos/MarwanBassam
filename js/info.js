function $(e) { return document.getElementById(e); }

window.onscroll = () => {
    $("me").className = "scroll-pos";
}

window.onload = () => {
    alert("This page is still being developed so it is subject to change!");
    const marioBlocks = document.querySelectorAll(".table-container > img");
    for (let i = 0; i < marioBlocks.length; i++) {
        marioBlocks[i].addEventListener("click", blockClick);
    }
}

function blockClick(e) {
    e.target.parentNode.classList.replace("unopened", "opened");
    
}