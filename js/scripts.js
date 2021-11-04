$(document).ready(function() {
  $("form#main").submit(function(event) {
    const age = parseInt($("input#age").val());
  });
  $("form#main").submit(function(event) {  
    let animal = $("#animal").val();
    const number1 = parseInt($("select#animal").val());
  });
  $("form#main").submit(function(event) {  
    let comfort = $("input:radio[name=comfort]:checked").val();
    const number2 = parseInt($("select#comfort").val());
  });
    $("form#main").submit(function(event) {
    let color = $("#color").val();
    const number3 = parseInt($("input#color").val());
  });

    const score = age + number1 + number2 + number3;
    console.log(score);

  });

  if (score <= 79) {
    $("#python").show();
  } else if (value === 80) {
    alert("You got the lucky number!");
    $("#csharp").show();
  } else if (value >= 160) {
    $("#rust").show();


    
    event.preventDefault();
  };
;
