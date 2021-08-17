var submit_button = document.getElementById("submitButton");
var win_button = document.getElementById("winMessage");
var lose_button = document.getElementById("loseMessage");

function createButtons() {
  submit_button.style.display = "none";
  var n = document.getElementById("input_number_buttons").value;
  var win_nr = getRandomInteger(1, n);
  for (var i = 1; i <= n; ++i) {
    var object = document.getElementById('container');
    var button = document.createElement("BUTTON");
    object.appendChild(button);
    button.innerHTML = "Buton" + " " + i;                       
    if (i == win_nr) {
      button.onclick = function() {textFunction(win_button, lose_button)};
    } else {
      button.onclick = function() {textFunction(lose_button, win_button)};
    }
  }
}

function getRandomInteger(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function textFunction(win, lose) {
  win.style.display = "block";
  lose.style.display = "none";
}