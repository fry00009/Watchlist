$(document).ready(function() {

  // $(".Circle").click(function() {
  //   $(".Circle").addClass("expand");
  // });

  $(".Rarrow").click(function() {
    $(".Seasons").removeClass("Slide1left");
    $(".Seasons2").removeClass("Slide2left");
    $(".Seasons").addClass("Slide1right");
    $(".Seasons2").addClass("Slide2right");
    $(this).addClass("Opacity0");
    $(this).removeClass("Opacity100");
    $(".Larrow").removeClass("Opacity0");
    $(".Larrow").addClass("Opacity100");
    $(".SeasonNumber").addClass("Opacity0");
    $(".EpisodeNumber").addClass("Opacity0");
    $(".SeasonNumber").removeClass("Opacity100");
    $(".EpisodeNumber").removeClass("Opacity100");
    $(".SeasonNumber2").addClass("Opacity100");
    $(".EpisodeNumber2").addClass("Opacity100");
  });

  $(".Larrow").click(function() {
    $(".Seasons").removeClass("Slide1right");
    $(".Seasons2").removeClass("Slide2right");
    $(".Seasons").addClass("Slide1left");
    $(".Seasons2").addClass("Slide2left");
    $(this).addClass("Opacity0");
    $(this).removeClass("Opacity100");
    $(".Rarrow").addClass("Opacity100");
    $(".Rarrow").removeClass("Opacity0");
    $(".SeasonNumber2").addClass("Opacity0");
    $(".EpisodeNumber2").addClass("Opacity0");
    $(".SeasonNumber2").removeClass("Opacity100");
    $(".EpisodeNumber2").removeClass("Opacity100");
    $(".SeasonNumber").addClass("Opacity100");
    $(".EpisodeNumber").addClass("Opacity100");
  });

});
