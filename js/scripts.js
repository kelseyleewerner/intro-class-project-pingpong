var userOutput = funtion(x) {
  var text = "";
  for (var i = 1; i <= x; i++) {
    if (i % 15 === 0) {
      text += "pingpong <br>";
    }
    else if (i % 5 === 0) {
      text += "pong <br>";
    }
    else if (i % 3 === 0) {
      text += "ping <br>";
    }
    else {
      text += i + "<br>";
    }
  }
  return text;
}





$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var x = $("input#userNumber").val();
    var output = userOutput(x);

    $(".resultNumbers").html(output);

    $("#resultDiv").show();

    event.preventDefault();
  });
});
