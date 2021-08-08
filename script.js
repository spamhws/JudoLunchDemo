var offset = $(".first-row").offset();
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $(".first-row").css("left", -200 - st/10 - offset.left/10);
});

var offset = $(".second-row").offset();
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $(".second-row").css("left", st/10 + offset.left/10);
});
