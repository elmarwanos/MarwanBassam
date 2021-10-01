function selectTitle() {
    $("title")[0].className = "title selected";
    $("navbar")[0].style.display = "block";
}

function renewStar(e) {
    $("#stars-container").append(e);
}

function addStar(amount, sclass) {
    for (let index = 0; index < amount; index++) {
        $("#stars-container").append(
            $("<div>")
                .addClass("star")
                .addClass(sclass)
                .css("top", `${Math.random() * window.innerHeight * 4}px`)
                .css("left", `${Math.random() * window.innerWidth}px`)
                .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        renewStar(this);
                    }
                )
        );
    }
}

window.onload = function () {
    addStar(20, "star1");
    addStar(40, "star2");
    addStar(120, "star3");
};
