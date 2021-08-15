var submit_button = document.getElementById("submitButton");
var win_button = document.getElementById("winMessage");
var lose_button = document.getElementById("loseMessage");

function myFunction() {
  submit_button.style.display = "none";
  var n = document.getElementById("input_number_buttons").value;
  var win_nr = getRandomInteger(1, n);
  for (var i = 1; i <= n; ++i) {
    var object = document.getElementById('container');
    var button = document.createElement("BUTTON");
    object.appendChild(button);
    button.innerHTML = "buton";                       
    if (i == win_nr) {
      button.onclick = function() {winFunction()};
    } else {
      button.onclick = function() {loseFunction()};
    }
  }
}

function getRandomInteger(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function winFunction() {
  win_button.style.display = "block";
  lose_button.style.display = "none";
}
function loseFunction() {
  win_button.style.display = "none";
  lose_button.style.display = "block";
}