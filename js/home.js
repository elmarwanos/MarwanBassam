function selectTitle() {
    $(".title").addClass("selected").removeClass("blinking");
    $(".title:hover").css("cursor","text")
    $(".navbar").css("display", "block");
    
}

function renewStar(e) {
    //called by addStar when animation ends
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
