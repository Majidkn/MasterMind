let colors = ["primary", "success", "danger", "warning", "info"];
let selectedCircle = null;
let canSelectCircle = true;
let level = 0;

$(".circles").hover(function () {
    canSelectCircle = $(".circles").index(this) == level;
});

$(".circle:not(.mini)").click(function () {
    if (canSelectCircle) {
        selectedCircle = $(this);
        $(".circle").removeClass("selected");
        $(this).addClass("selected");
        let isRowComplete = true;
        $(".circles").eq(level).find(".circle:not(.mini)").each(function (key, circle) {
            if (!$(circle).attr("class").startsWith("bg-")) isRowComplete = false;
        });
    }
});

$(".select-circle").click(function () {
    let makeColorBg = function (colorIndex) {
        return `bg-${colors[colorIndex]}`;
    };
    colors.forEach(function (color, key) {
        selectedCircle.removeClass(makeColorBg(key));
    });
    selectedCircle.attr("class", makeColorBg($(".select-circle").index(this)) + " " + selectedCircle.attr("class"));
});

let checkAnswer = function () {};

let generateNumber = function () {
    number = [];
    for (var i = 0; i < 5; i++) {
        number.push(((Math.random() * 10000) % 5).toFixed(0));
    }
};
generateNumber();