function peek_in() {
    $("#portrait-wrapper")
        .css("transform", "translateX(-20px)")
        .css("transition", "1s");
    $("#bookmark").css("transform", "translateX(20px)").css("transition", "1s");
}

function peek_out() {
    $("#portrait-wrapper")
        .css("transform", "translateX(20px)")
        .css("transition", "1s");
    $("#bookmark")
        .css("transform", "translateX(-20px)")
        .css("transition", "1s");
}

function flip_portrait() {
    if ($("#portrait").css("filter") == "opacity(1)") {
        $("#portrait").css("filter", "opacity(0)");
        $("#back-content").css("display", "block");
    }
    else{
        $("#portrait").css("filter", "opacity(1)");
        $("#back-content").css("display", "none");
    }
}
