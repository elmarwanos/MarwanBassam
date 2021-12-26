function $(e) {
    return document.getElementById(e);
}

window.onload = function () {
    document.getElementById("title").onclick = selectTitle;
    addStar(20, "star1");
    addStar(40, "star2");
    addStar(120, "star3");
};

function selectTitle() {
    $("title").className = "selected";
    $("hyperjump").className = "zoom";
    setTimeout(() => {window.location.href = "info.html"}, 4000);
}

function addStar(amount, sclass) {
    for (let index = 0; index < amount; index++) {
        var tempStar = document.createElement("div");
        tempStar.className = `star ${sclass}`;
        tempStar.style.top = `${Math.random() * 300}%`;
        tempStar.style.left = `${Math.random() * 100}%`;
        $("stars-container").append(tempStar);
    }
}
