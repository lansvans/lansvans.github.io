
$('#landing_container').css({
  "min-height": $( window ).height()
});

$('#testimonial').css({
  "marginTop": $( window ).height() / 4
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

$('#usluga_1_trigger').click(function(){
    $('#usluga_1').toggle("slow");
    $('#usluga_2').hide("slow");    
    $('#usluga_3').hide("slow");    
    $('#usluga_4').hide("slow");    
});

$('#usluga_2_trigger').click(function(){
    $('#usluga_1').hide("slow");
    $('#usluga_2').toggle("slow");    
    $('#usluga_3').hide("slow");    
    $('#usluga_4').hide("slow");    
});

$('#usluga_3_trigger').click(function(){
    $('#usluga_1').hide("slow");
    $('#usluga_2').hide("slow");    
    $('#usluga_3').toggle("slow");    
    $('#usluga_4').hide("slow");    
});

$('#usluga_4_trigger').click(function(){
    $('#usluga_1').hide("slow");
    $('#usluga_2').hide("slow");    
    $('#usluga_3').hide("slow");    
    $('#usluga_4').toggle("slow");    
});

;(function() {
    // Initialize
    var bLazy = new Blazy({
        offset: 100
    });
})();

$("#map").click(function(){
    $("#map iframe").removeClass("disabled_click");
    console.log("clicked");

})