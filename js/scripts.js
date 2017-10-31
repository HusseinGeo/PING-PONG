function countUp(input){
  var total = [];
  for (var index = 1; index <= input; index ++)
}

function pingpong(input) {
  var total = [];
  if ((input % 3 === 0)&& (input % 5 ===0)) {
    total.push("pingpong");
  }
  else if (input % 5 ===0) {
    total.push("pong");
  }
  else if (input % 3 ===0) {
    total.push("ping");
  }
  else {
    total.push(input);
  }
};

return total;
};
