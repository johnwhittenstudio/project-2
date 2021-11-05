$(document).ready(function() {
  $("form#main").submit(function(event) {
    const name = $("input#name").val();
    const number1 = parseInt($("select#animal").val());
    const number2 = parseInt($("select#comfort").val());


  if (number1 === 1) {
    $("#python").toggle();
    $(".name").text(name);
  } else if (number1 === 2) {
    $(".name").text(name);
    $("#csharp").toggle();
  } else if (number1 === 3) {
    $(".name").text(name);
    $("#rust").toggle()
  }

  $("#main").toggle();

  event.preventDefault();

  $("form#main").submit(function(event) {


  });
});
}); 