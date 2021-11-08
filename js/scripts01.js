$(document).ready(function() {
  $("form#main").submit(function(event) {
    const name = $("input#name").val();
    const number1 = parseInt($("#animal").val());
    const number2 = parseInt($("input:radio[name=comfort]:checked").val());
    let score = number1 + number2;
    console.log(number2);

  if (score <= 9) {
    $("#python").fadeToggle();
    $(".name").text(name);
  } else if (score >= 10 && score < 49) {
    $("#csharp").fadeToggle();
    $(".name").text(name);
  } else if (score >= 50) {
    $("#rust").fadeToggle()
    $(".name").text(name);
  }

  $("#main").toggle();

  event.preventDefault();

  $("form#main").submit(function(event) {


  });
});
});