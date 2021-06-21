
var questionsText = (`Wie heißt du?
Wo wohnst du?
Wohnst du in COUNTRY?
Wohnst du in SUBURB?
Was magst du?
Magst du NOUN?
Was magst du nicht?
Was hasst du?
Hasst du NOUN?
Wie ist deine Handynummer?
Wie heisst dein Freund?
Wo wohnt er?
Wohnt er in SUBURB  / COUNTRY?
Was mag er?
Mag er NOUN?
Was mag er nicht?
Was hasst er?
Hasst er NOUN?
Wie ist er? (use an adjective or several to describe)
Wie heisst deine Freundin?
Wo wohnt sie?
Wohnt sie in SUBURB  / COUNTRY?
Was mag sie?
Mag sie NOUN?
Was mag sie nicht?
Was hasst sie?
Hasst sie NOUN?
Wie ist sie? (use an adjective or several to describe)
Wie heißen deine Freunde?
Kannst du sie beschreiben (describe)?
Wie geht’s?
Wie heisst ________ auf Deutsch?
Wie heisst _________ auf Englisch?
Wie schreibt man _______________?
Wie alt bist du?
Wie alt ist dein Freund?
Wie alt ist deine Freundin?
Wie alt sind deine Freunde?
Wer ist das? (you could be shown a picture)
Wie ist dein Vorname?
Wie ist dein Familienname?
Wie ist ihr Vorname/Familienname?
Wie ist sein Vorname/Familienname?
Bist du in Klasse ____________?
Ist er/sie in Klasse __________?
Spielst du SPORT ?
Spielt er SPORT ?
Spielt sie SPORT ?
Bist du ein Angeber?
Ist NAME ein Angeber?
Bitte beschreib (describe) deine Familie.
Hast du Geschwister?
Wie viele Geschwister hast du?
Hast du Eltern?
Hast du einen Bruder?
Hast du eine Schwester?
Wie heißt dein/deine FAMILY MEMBER?
Wie heißen deine ____________ (plural) ?
Bist du Einzelkind?
Hast du einen Zwilling?
Bitte beschreib (describe) seine/ihre Familie.
Hat  er/sie Geschwister?
Wie viele Geschwister hat er/sie?
Hat er/sie Eltern?
Hat er/sie einen Bruder?
Hat er/sie eine Schwester?
Wie heißt sein/seine or ihr/ihre FAMILY MEMBER?
Wie heißen seine/ihre ____________ (plural)?
Welche Farbe hat NOUN?
Welche Farben haben NOUN (plural)?
Welche Farben hat die Fahne von COUNTRY?
Woher kommst du?
Kommst du aus COUNTRY?
Woher kommt er/sie or der/die/das NOUN?
Woher kommen sie?
Hast du ein Haustier?
Hast du Haustiere?
Hast du ein/eine ANIMAL?
Wie ist der/die/das or dein/deine ANIMAL?
Hat er/sie ein/eine ANIMAL?
Hat er/sie ein Haustier?
Welche Farbe ist ihr/ihre or sein/seine ANIMAL?
Wie alt ist ihr/ihre or sein/seine ANIMAL?
Wie ist ihr/ihre or sein/seine ANIMAL? Or Beschreibe ihr/ihre/ihren or sein/seine/seinen ANIMAL.`);


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
    document.getElementById("timer").innerText = timer/100;
    timer = 0;
    document.getElementById("question").innerText = getQuestion();
  }
