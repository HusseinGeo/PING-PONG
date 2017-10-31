function countUp(input) {
  var total = {};
  // for (var index = 1; index <= input; index ++)
};

function pingpong(input) {
  var total;
  if ((input % 3 === 0)&& (input % 5 ===0)) {
    total = ("pingpong");
  }
  else if (input % 5 ===0) {
    total = ("pong");
  }
  else if (input % 3 ===0) {
    total = ("ping");
  }
  else {
    total = (input);
  }
  return total;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("input#input").val();

    for(var index = 1; index<=userInput; index += 1) {
      var result=pingpong(index)
      $("ul#list").append('<li>'+result+'</li>');
    }
    event.preventDefault();
  });
});
