$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const value = parseInt($("#animal").val());
    $("#output").text(result);
  });

  if (value <= 2) {
    $("#python").show();
  } else if (value === 3) {
    alert("You got the lucky number!");
    $("#csharp").show();
  } else if (value >= 4) {
    $("#rust").show();
  };
});
