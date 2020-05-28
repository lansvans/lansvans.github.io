
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

    $(function() {
        $('.lazy').lazy({
            threshold: 800
        });
    });

})();

$("#map").click(function(){
    $("#map iframe").removeClass("disabled_click");
})
