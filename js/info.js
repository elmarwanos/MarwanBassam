function $(e) { return document.getElementById(e); }

window.onscroll = () => {
    //Move portrait on scroll down
    $("me").className = "scroll-pos";

    //Reposition portrait on scroll up
    if(window.scrollY == 0) {
        $("me").className = "frozen-pos";
    }
}

window.onload = () => {
    //Development warning
    alert("This page is still being developed so it is subject to change!");

    //Set up for mario blocks
    const marioBlocks = document.querySelectorAll(".table-container > img");
    for (let i = 0; i < marioBlocks.length; i++) {
        marioBlocks[i].addEventListener("click", blockClick);
    }
}

//Click mario box to open
function blockClick(e) {
    e.target.parentNode.classList.replace("unopened", "opened");
}