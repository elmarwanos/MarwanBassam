function renewStar(e) {
  $("#stars-container").append(e);
}

for (let index = 0; index < 20; index++) {
  $("#stars-container").append(
    $("<div>")
      .addClass("star star1")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          renewStar(this);
        }
      )
  );
}
for (let index = 0; index < 40; index++) {
  $("#stars-container").append(
    $("<div>")
      .addClass("star star2")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          renewStar(this);
        }
      )
  );
}
for (let index = 0; index < 120; index++) {
  $("#stars-container").append(
    $("<div>")
      .addClass("star star3")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          renewStar(this);
        }
      )
  );
}
