
var questionsText = (`Wohnst du in einer Wohnung oder einem Haus?
Kannst du dein Haus /deine Wohnung beschreiben?
Wo ist dein Zimmer? 
Was ist neben, unter, hinter … deinem Zimmer? 
Ist dein Zimmer im ersten/zweiten… Stock?
Was gibt es alles in deinem Zimmer? 
Was machst du normalerweise in deinem Zimmer?
Was kann man aus deinem Fenster sehen?
Hast du ein Lieblingszimmer?
Welche Zimmer sind im ersten/zweiten Stock?
Hast du einen Keller/Dachboden? Was ist im Keller/Dachboden?
Welches Zimmer ist unter/neben/vor/hinter dem/der ...................... (room in your house)?
Musst du im Haushalt helfen? Was musst du machen?
Wie oft musst du ............... (a chore)?
Was ist leichter, …..oder ………?
Was ist besser, …..oder ………? 
Was macht dein Vater/ deine Schwester?/ dein Bruder im Haushalt?
Welche Geschäfte gibt es in deinem Wohnort?
Gibt es in deinem Wohnort ein/eine ..........................?
Wo ist der/die/das .......................in deinem Wohnort?
Welchen Teilzeitjob würdest du gerne haben?
Erzähl mir von deinem Teilzeitjob! Wie verdienst du Geld?
Wieviel verdienst du pro Stunde/Woche/Monat?
Was machst du mit deinem Geld/Taschengeld? Wofür gibst du dein Geld aus?
Sparst du auch? 
Wofür sparst du?
Wofür gibst du am meisten aus? 
Hat dein Freund einen Teilzeitjob? Was macht er?
Was darf man in Australien/Deutschland machen / nicht machen?
Was darfst du zu Hause machen / nicht machen?
Was darfst du in deiner Schule machen / nicht machen?
Wie findest du den/die/das ………………….?`);


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
    document.getElementById("timer").innerText = "You took " + timer/100 + " seconds to answer the previous question";
    timer = 0;
    document.getElementById("question").innerText = getQuestion();
    if (!document.getElementById("question").innerText) document.getElementById("question").innerText = "You finished all the questions";
  }
