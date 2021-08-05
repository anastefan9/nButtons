function myFunction() {
  var x = document.getElementById("number").value;
  if (isNaN(x) || x < 0) {
    document.getElementById("answer").innerHTML = "Datele introduse nu sunt valide!";
    document.getElementById("nextButton").style.display = "none";
  } else {
    document.getElementById("answer").innerHTML = "Input OK";
    if (x == 1) {
      document.getElementById("nextButton").innerHTML = "Afiseaza " + x + " buton";
    } else {
      document.getElementById("nextButton").innerHTML = "Afiseaza " + x + " butoane";
    }
    document.getElementById("nextButton").style.display = "block";
  }
}

function buttonFunction() {
  var n = document.getElementById("number").value;
  var win_nr;
  if (n < 2) {
    win_nr = n;
  } else if (n < 4) {
    win_nr = n - 1;
  } else if (n < 7) {
    win_nr = n - 3;
  } else if (n < 11) {
    win_nr = n - 6;
  } else if (n < 21) {
    win_nr = n - 10;
  } else {
    win_nr = n - 20;
  }
  for (var i = 0; i < n; ++i) {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
    btn.innerHTML = "buton";
    if (i == (win_nr - 1)) {
      btn.onclick = function() {
        document.getElementById("winMessage").style.display = "block";
        document.getElementById("loseMessage").style.display = "none";
      };
    } else {
      btn.onclick = function() {
        document.getElementById("winMessage").style.display = "none";
        document.getElementById("loseMessage").style.display = "block";
      };
    }
  }
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("submitButton").style.display = "none";
}
