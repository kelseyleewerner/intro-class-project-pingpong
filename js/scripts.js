var userOutput = function(countUp) {
  var text = "";
  for (var i = 1; i <= countUp; i++) {
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
  $("#userInput").submit(function(event) {
    var countUp = $("#userNumber").val();
    var output = userOutput(countUp);

    $("#resultNumbers").html(output);

    event.preventDefault();
  });
});
