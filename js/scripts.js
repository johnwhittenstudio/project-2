$(document).ready(function() {
  $("form#main").submit(function(event) {
    const age = parseInt($("input#age").val());
    const number1 = parseInt($("select#animal").val());
    const number2 = $("input:radio[name=comfort]:checked").val();
    const number3 = parseInt($("input#comfort").val());

    const score = (age + number1 + number2 + number3);

  if (age) {
    let score = (100 - age) * 3;
    if (number1 <=19 )
  }

  if (score <= 79) {
    $("#python").show();
  } else if (value === 80) {
    alert("You got the lucky number!");
    $("#csharp").show();
  } else if (value >= 160) {
    $("#rust").show()
  }

  });
}); 