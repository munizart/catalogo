var index = 0;
var total = JSON.data.widget.size; //# of carousel items

$(document).ready(function() {
    var view = $("#carousel-viewport");
    var desktopRight = $("#carousel-control-right"),
        desktopLeft = $("#carousel-control-left"),
        mobileRight = $("#carousel-control-mobile-right"),
        mobileLeft = $("#carousel-control-mobile-left");

    desktopRight.click(right);
    mobileRight.click(right);
    desktopLeft.click(left);
    mobileLeft.click(left);

    function left(e) {
        prevIndex();
        view.css('transform', 'translateX(' + -10 * index * amountToJump() + '%)');
    }

    function right(e) {
        nextIndex();
        view.css('transform', 'translateX(' + -10 * index * amountToJump() + '%)');
    }
});

function maxIndex() {
    var windowWidth = $(window).width();
    var small = (total / 2 - 1) + total % 2,
        med = (total / 3 - 1) + total % 3,
        large = (total / 4 - 1) + total % 4;
    if (windowWidth < 601) return small - small % 1;
    if (windowWidth < 1001) return med - med % 1;
    return large - large % 1 - 1;
}

function amountToJump() {
    var windowWidth = $(window).width();
    var small = 2,
        med = 3,
        large = 4;
    if (windowWidth < 601) return small;
    if (windowWidth < 1001) return med;
    return large;
}

function nextIndex() {
    if (index < maxIndex()) index++;
    else index = 0;
}

function prevIndex() {
    if (index > 0) index--;
    else index = maxIndex();
}
