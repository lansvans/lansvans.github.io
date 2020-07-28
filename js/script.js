
$('#landing_container').css({
  "min-height": $( window ).height()
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 50) {
        $("#navbar").addClass("navbar_small");
        $("#small_logo").removeClass("hide")
    } else {
        $("#navbar").removeClass("navbar_small")
        $("#small_logo").addClass("hide")
    }
});

;(function() {
    // Initialize
    var bLazy = new Blazy({
        offset: 1000,
        selector: "img"
    });
})();

$("#map").click(function(){
    $("#map iframe").removeClass("disabled_click");
})
