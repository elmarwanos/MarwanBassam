function $(e) { return document.getElementById(e); }

window.onscroll = () => {
    $("me").className = "scroll-pos";
}