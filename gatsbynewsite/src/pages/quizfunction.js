  function checkAnswer(){
    var a = ['q1a','q2a','q3a','q4a','q5a'];
    var b = ['q1b','q2b','q3b','q4b','q5b'];
    var totalScore = 0;
    var userType;

    for(var i = 0; i<5;i++){
      if(document.getElementById(a[i]).checked){
        totalScore++;
      }else{
        totalScore = totalScore;
      }
    }
    if(totalScore <= 2){
      document.getElementById("answers").innerHTML = "novice";
      window.location.assign("novice.html");
    }else if(totalScore == 3){
      document.getElementById("answers").innerHTML = "avg";
      window.location.assign("avg.html");
    }else if(totalScore => 4){
      document.getElementById("answers").innerHTML = "adv";
      window.location.assign("adv.html");
    }

    for(var j=0;j<5;j++){
      document.getElementById(a[j]).checked = false;
      document.getElementById(b[j]).checked = false;
    }
  }
