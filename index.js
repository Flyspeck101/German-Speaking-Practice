
var questionsText = (`Wo wohnst du?
In welcher Straße wohnst du?
Was gibt es alles in deinem Vorort?
Was kann man in deinem Wohnort alles machen?
Kann man in deinem Wohnort ACTIVITY?
Wo ist der/die/das PLACE in deinem Wohnort?
Gibt es eine/einen PLACE in deinem Wohnort?
Wohnst du in der Nähe von einem/einer PLACE?
Wo wohnt dein Freund?
Wie findest du deinen Wohnort?
Wohnst du gern in deinem Wohnort? Warum?
Wie kommst du zur Schule?
Wie weit ist es von von deinem Haus bis zu Schule?
Wie lange dauert es von deinem Haus bis zu deiner Schule?
Wie kommst du zur/zum PLACE? 
Wie lange dauert das? 
Wie viele Kilometer sind das?
Wie lange brauchst du von PLACE  bis zu PLACE?
Wie weit ist es von PLACE bis zu PLACE?
Was machst du gern im SEASON? (Frühling, Sommer, Herbst, Winter)?
Was machst du gern am ................... (Wochenende, Morgen, Nachmittag, Abend, …..tag)?
Wohin gehst du am ...................... (Wochenende, Morgen, Nachmittag, Abend, …..tag)?
Kannst/Darfst/Willst/Möchtest ACTIVITY + VERB?
Was isst und trinkst du gern?
Was isst du zum Frühstück?
Was isst du zum Mittagessen?
Nimmst du es von zuHause mit oder kaufst du es in der Schule?
Wieviel kostet in deiner Schule DRINK/FOOD?
Findest du das teuer oder billig?`);


  const questions = questionsText.split("\n");
  var questionsThisRound = questions;
  var timer = 0;
  function getQuestion() {
    return questionsThisRound.splice(Math.floor(Math.random()*questionsThisRound.length), 1);
  }
  function round() {
    document.getElementById("round").style.display = "none";
    document.getElementById("next").style.display = "block";
    document.getElementById("question").innerText = getQuestion();
    setInterval(function() { timer++; }, 10); 
  }
  function next() {
    document.getElementById("timer").innerText = "You took " + timer/100 + " seconds to answer the previous question;
    timer = 0;
    document.getElementById("question").innerText = getQuestion();
    if (document.getElementById("question").innerText == "") document.getElementById("question").innerText = "You finished all the questions";
  }
