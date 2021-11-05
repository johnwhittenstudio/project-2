$(document).ready(function() {
  $("form#main").submit(function(event) {
    const age = parseInt($("input#age").val());
    console.log("age");

  $("form#main").submit(function(event) {  
    let animal = $("#animal").val();
    const number1 = parseInt($("select#animal").val());
    console.log("animal");

  $("form#main").submit(function(event) {  
    let comfort = $("input:radio[name=comfort]:checked").val();
    const number2 = parseInt($("input#comfort").val());
    console.log("comfort");

    $("form#main").submit(function(event) {
    let color = $("#color").val();
    const number3 = parseInt($("input#color").val());
    console.log("color");


    const score = age + number1 + number2;
    console.log(score);



  if (score <= 19) {
    score 
  }

  if (colorInput.includes("000000") === true)
    score += 50;
  else {
    score += 10;



  if (score <= 79) {
    $("#python").show();
  } else if (value === 80) {
    alert("You got the lucky number!");
    $("#csharp").show();
  } else if (value >= 160) {
    $("#rust").show();
    
    event.preventDefault();
  };
});