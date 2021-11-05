$(document).ready(function() {
  $("form#main").submit(function(event) {
    const number1 = parseInt($("select#animal").val());

  if (number1 === 1) {
    $("#python").toggle();
  } else if (number1 === 2) {
    $("#csharp").toggle();
  } else if (number1 === 3) {
    $("#rust").toggle()
  }

  $("#main").toggle();

  event.preventDefault();

  $("form#main").submit(function(event) {


  });
});
}); 