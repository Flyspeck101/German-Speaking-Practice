
var questionsText = (`Wo wohnst du?
Was gibt es alles in deinem Vorort?
Was kann man in SUBURB machen?
Kann man in deinem Wohnort ACTIVITY?
Wo ist der/die/das .............. in deinem Wohnort?
Gibt es eine/einen ............ in deinem Wohnort?
In welcher Straße wohnst du?
Wohnst du in der Nähe von einem/einer PLACE?
Wie kommst du zur/zum ............................?
Wie lange dauert das? Wie viele Kilometer sind das?
Wie lange brauchst du von ............. bis ..............?
Wie weit ist es von ............. bis ..............?
Wohnst du gern in Sydney? Warum?
Wohnst du gern in deinem Wohnort? Warum?
Wo wohnt dein bester Freund?
Was machst du gern im ..................(seasons)?
Was machst du gern am ................... (Wochenende, Morgen, Nachmittag, Abend, …..tag)?
Wohin gehst du am ...................... (Wochenende, Morgen, Nachmittag, Abend, …..tag)?\
Wohin gehst du am ................... (Wochenende, Morgen, Nachmittag, Abend, …..tag)?
Kannst/Darfst/Willst/Möchtest ACTIVITY?
Was isst und trinkst du gern?
Was isst du zum Frühstück?
Was isst du zum Mittagessen? 
Nimmst du es von ZuHause mit oder kaufst du es in der Schule?
Wieviel kostet in deiner Schule DRINK/FOOD?
Findest du das teuer oder billig?
Was trägst du gern?
Sind Kleider wichtig für dich?
Welche Größe hast du?
Wo kaufst du deine Kleider?
Wo kaufst du am liebsten ein?
Wer kauft deine Kleider?
Kaufst du gern Kleider im Sonderangebot?
Was trägst du heute?
Was trägst du gern am Wochenende?
Was trägst du im Sommer/ Winter?
Was tragen junge Leute zu Partys?
Beschreib deine Schuluniform.
Wie findest du Jeansjacken?/ Flip Flops?/ karierte Hemden? Etc.
Was findest du besser: ______ oder ________? Warum?
Wie findest du die Mode im Moment?
Ist Mode wichtig fuer dich? Warum?
Was trägt dein Vater/ deine Mutter gern?
Was tragen deine Lehrer?
Was tragen deine Freunde?
Kannst du dich beschreiben?
Wie siehst du aus?
Kannst du deine/deinen ………………...beschreiben ?
Wie sieht dein/deine ………..... aus?
Wie gross bist du?
Wie gross ist dein/deine …….? 
Wie ist das Wetter heute?
Wie ist die Temperatur heute in Sydney?
Was ist dein Traum? (Was willst du in der Zukunft machen?)
Wohnst du in einer Wohnung oder einem Haus?
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
Welchen TZJ würdest du gerne haben?
Erzähl mir von deinem Teilzeitjob! Wie verdienst du Geld?
Wieviel verdienst du pro Stunde/Woche/Monat?
Was machst du mit deinem Geld/Taschengeld? Wofür gibst du dein Geld aus?
Sparst du auch? 
Wofür sparst du?
Wofür gibst du am meisten aus? 
Hat dein Freund einen TZJ? Was machen er?
Was darf man in Australien/Deutschland machen / nicht machen?
Was darfst du zu Hause machen / nicht machen?
Was darfst du in deiner Schule machen / nicht machen?
Wie findest du den/die/das ………………….?
`);


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
