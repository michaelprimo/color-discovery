//COLOR DISCOVERY

//set the actual level of the game.
let level = 0;
//set the points you have earned.
let points = 0;
//this const decide of much points give to the player for every color finded. 
const pointsPerLetter = 100;


let arr = ["1", "2", "3", "4", "5"];

//list of the real names of the colors.
let realColors = ['lavanda','magenta','rosa','melanzana','tronco','castagno','anguria','salmone','aragosta','corallo','azalea','ciliegia','rosso','bordeaux','platino','conchiglia','grano','pesca','arancione','oro','mogano','avorio','beige','albicocca','carbone','rame','zafferano','cioccolato','limone','giallo','verde','acquamarina','giada','antracite','denim','celeste','azzurro','magnolia','blu','lilla','glicine','orchidea','ametista','viola','indaco','prugna','bianco','grigio','nero','ciano','malva','lampone','fucsia','vinaccia','amaranto','cremisi','granata','scarlatto','vermiglio','porpora','carminio','sangria','borgogna','rubino','isabella','lino','papaya','biscotto','kaki','catrame','tan','ecru','camoscio','bistro','fulvo','sabbia','bronzo','seppia','ocra','solidago','ambra','mandarino','marrone','crema','olivina','pera','limone','chartreuse','lime','celadon','asparago','pistacchio','giada','turchese','ceruleo','ardesia','avio','cobalto','pervinca','cardo','eliotropo','gainsboro','argento','fiamma','scuolabus','savoia','fiordaliso','acqua','alice','bondi','cadetto','capri','cielo','dodger','klein','colomba','menta','notte','oltremare','cenere','ottone','oliva','mountbatten','shocking','cardinale','fragola','mattone','pompeiano','tiziano','veneziano','violaceo','fuoco','pomodoro','caraibi','foresta','primavera','smeraldo','veronese','fantasma','floreale','fumo','navajo','polvere','napoli','segnale','topo','muschio','pino','ufficio','violetto'];
//list of the edited names of the colors.
let nameColors  = ['lavanda','magenta','rosa','melanzana','tronco','castagno','anguria','salmone','aragosta','corallo','azalea','ciliegia','rosso','bordeaux','platino','conchiglia','grano','pesca','arancione','oro','mogano','avorio','beige','albicocca','carbone','rame','zafferano','cioccolato','limone','giallo','verde','acquamarina','giada','antracite','denim','celeste','azzurro','magnolia','blu','lilla','glicine','orchidea','ametista','viola','indaco','prugna','bianco','grigio','nero','ciano','malva','lampone','fucsia','vinaccia','amaranto','cremisi','granata','scarlatto','vermiglio','porpora','carminio','sangria','borgogna','rubino','isabella','lino','papaya','biscotto','kaki','catrame','tan','ecru','camoscio','bistro','fulvo','sabbia','bronzo','seppia','ocra','solidago','ambra','mandarino','marrone','crema','olivina','pera','limone','chartreuse','lime','celadon','asparago','pistacchio','giada','turchese','ceruleo','ardesia','avio','cobalto','pervinca','cardo','eliotropo','gainsboro','argento','fiamma','scuolabus','savoia','fiordaliso','acqua','alice','bondi','cadetto','capri','cielo','dodger','klein','colomba','menta','notte','oltremare','cenere','ottone','oliva','mountbatten','shocking','cardinale','fragola','mattone','pompeiano','tiziano','veneziano','violaceo','fuoco','pomodoro','caraibi','foresta','primavera','smeraldo','veronese','fantasma','floreale','fumo','navajo','polvere','napoli','segnale','topo','muschio','pino','ufficio','violetto'];
//list of the real colors to put on the center, to the #color div.
let levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85','#ff8c69','#ed7465','#ff7f50','#d3305d','#de3163','#ff0000','#800000','#e5e4e2','#fff5ee','#f5deb3','#ffe5b4','#ffa500','#ffd700','#c04000','#fffff0','#f5f5dc','#fbceb1','#050402','#b87333','#f4c430','#d2691e','#fde910','#ffff00','#00ff00','#7fffd4','#00a86b','#293133','#1560bd','#99cbff','#007fff','#f8f4ff','#0000ff','#c8a2c8','#c9a0dc','#da70d6','#884da7','#8f00ff','#4b0082','#660066','#ffffff','#808080','#000000','#00ffff','#993366','#e30b5c','#f400a1','#c0007f','#e52b50','#dc143c','#7b1b02','#ff2400','#ff4d00','#b20000','#960018','#92000a','#800020','#410012','#f4f0ec','#faf0e6','#ffefd5','#ffe4c4','#c3b091','#d2b48c','#d2b48c','#c2b280','#f0dc82','#3d2b1f','#ebb55f','#f4a460','#cd7f32','#704214','#cc7722','#daa520','#ffbf00','#ffcc00','#964b00','#fffdd0','#9ab973','#d1e231','#fde910','#7fff00','#ccff00','#ace1af','#87a96b','#93c572','#00a86b','#30d5c8','#007ba7','#708090','#5d8aa8','#0047ab','#ccccff','#d8bfd8','#df73ff','#dcdcdc','#c0c0c0','#ff9900','#FFD800','#6397d0','#abcdef','#256d7b','#f0f8ff','#0095b6','#5f9ea0','#00bfff','#2271b3','#1E90FF','#3A75C4','#606e8c','#98FF98','#343A90','#120A8F','#E4E5E0','#CC9966','#898437','#997A8D','#FC0FC0','#C41E3A','#CE3018','#B22222','#D21F1B','#ba6262','#C80815','#C71585','#A61022','#FF6347','#00CC99','#228b22','#00FF7F','#50C878','#40826D','#F8F8FF','#FFFAF0','#F5F5F5','#FFDEAD','#B0E0E6','#F7E89F','#E5BE01','#646B63','#ADDFAD','#01796F','#008000','#8000FF'];
//this array contains the letters of the players.
let letterContainer = [];
// this toggle allows the game to find any button if it's clicked or not.
let toggle = createToggle();

const maxLevel = 30;

let hintsUsedLetter = 0;

let hintsUsedShuffle = 0;

let hintContainer = [];

const hintLetterCost = 100;
const hintShuffleCost = 50;






function save()
{
  jsonArr = JSON.stringify(realColors);
  localStorage.setItem("realColors", jsonArr);
  jsonArr = JSON.stringify(nameColors);
  localStorage.setItem("nameColors", jsonArr);
  jsonArr = JSON.stringify(levelColors);
  localStorage.setItem("levelColors", jsonArr);
  jsonArr = JSON.stringify(hintContainer);
  localStorage.setItem("hintContainer", jsonArr);
  localStorage.setItem("points", points);
  localStorage.setItem("level", level);
  localStorage.setItem("hintsUsedLetter", hintsUsedLetter);
}

function load()
{
  
  let str = localStorage.getItem("realColors");
  let parsedArr = JSON.parse(str);
  realColors = parsedArr;
 
  str = localStorage.getItem("nameColors");
  parsedArr = JSON.parse(str);
  nameColors = parsedArr;

  str = localStorage.getItem("levelColors");
  parsedArr = JSON.parse(str);
  levelColors = parsedArr;

  str = localStorage.getItem("hintContainer");
  parsedArr = JSON.parse(str);
  hintContainer = parsedArr;

  str = Number(localStorage.getItem("level"));
  level = str;

  str = Number(localStorage.getItem("points"));
  points = str;

  str = Number(localStorage.getItem("hintsUsedLetter"));
  hintsUsedLetter = str;

  refreshUI();
}





// give a event listener to every button with a letter.
giveLettersClick();
//call every function that initialize the game.
init();

alert("Benvenuto in Color Discovery! Ci sono dei colori in centro e devi usare le lettere attorno per scrivere il nome di quel colore. Riuscirai a terminare tutti i " + maxLevel + " livelli?")

//the function allow the game to start and initialize.
function init()
{
  
  show_togglecolor();
  resetVariables();
 
  // This allows to create a "seed" for every game and play.
  shuffleArray(nameColors, levelColors, realColors);
  // Call the function which allows to randomize every string of nameColors.
  randomizeString();
  
  
  refreshUI();
  
  if(localStorage.getItem("realColors") != null)
  {
    load();
  }
  else
  {
    save();
  }
  if(hintsUsedLetter == 0 && level == 0)
  {
    hintContainer = [];
    initialHint();
  }
  
}

function letterSelectedmax()
{
  let letterSelected = document.querySelector("#letterSelected");
  letterSelected.style.width = "" + 40 * realColors[level].length + "px";
  let hintSelected = document.querySelector("#hintSelected");
  hintSelected.style.width = "" + 40 * realColors[level].length + "px";
}

//show the current level reached on the UI
function showLevel()
{
  // store the DOM element #UI_level on the UI_level variable.
  let UI_level = document.querySelector("#UI_level");
  // refresh the UI.
  UI_level.innerHTML = 'Livello ' + (level + 1) + "";
}

//show the current points obtained on the UI
function showPoints()
{
  // store the DOM element with the class #UI_points on the UI_points variable.
  let UI_points = document.querySelector("#UI_points");
  // refresh the UI.
  UI_points.innerHTML = 'Punti ' + points + "";
}

// calculate the points earned of the level for giving it to the player. Call only at the end of the level and before switching to the next.
function givePoints()
{
  //store the string of the result of the level for calculate the result in points.
  let levelLetters = realColors[level];
  //calculate the result based on the letters of the level result multiplying it with the const containing the amount of points per letter.
  let pointsObtained = levelLetters.length * pointsPerLetter;
  // give the points calculated.
  points += pointsObtained;
  //refresh the UI with the extra added points.
  showPoints();
}

function show_togglecolor()
{
  let buttonLetters = document.querySelectorAll('#user-letters .letter');
  for(let j = 0; j < buttonLetters.length; j++)
  {
    
    if(toggle[j] == true && buttonLetters[j].textContent != "")
    {
      buttonLetters[j].style.backgroundColor = "lightyellow";
    }
    else
    {
      buttonLetters[j].style.backgroundColor = "grey";
    }
  }
}


function showColor()
{
    let guessingColor = document.querySelector('#user-letters #color');
    guessingColor.style.backgroundColor = levelColors[level];
}

function randomizeString()
{
    let randomChar;
    for(var i = 0; i < nameColors.length; i++)
    {
      for(var j = nameColors[i].length; j < 12; j++)
      {
          randomChar = Math.floor(Math.random() * 26) + 97;
          nameColors[i] = nameColors[i] + String.fromCharCode(randomChar);
      }

      nameColors[i] = shuffle(nameColors[i]);
    }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * @param {Array} b items An array containing the items.
 */
 function shuffleArray(a, b, c) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
        [b[i], b[j]] = [b[j], b[i]];
        [c[i], c[j]] = [c[j], c[i]];
    }
    return a;
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

function giveLetters(a)
{
  let buttonLetters = document.querySelectorAll('#user-letters .letter');
  for(let j = 0; j < buttonLetters.length; j++)
  {
    buttonLetters[j].innerHTML = "";
  }
  for(let j = 0; j < a[level].length; j++)
  {
    buttonLetters[j].innerHTML = a[level].charAt(j);
  }
  
}

function giveLettersClick()
{

  let buttonLetters = document.querySelectorAll('#user-letters .letter');
  for(let j = 0; j < buttonLetters.length; j++)
  {
    buttonLetters[j].addEventListener("click", function()
    {
      if(toggle[j] == true && buttonLetters[j].textContent != "")
      {
        this.style.backgroundColor = "grey";
        toggle[j] = !toggle[j];
        if(letterContainer.length < realColors[level].length)
        {
          letterContainer.push(buttonLetters[j].textContent);
        }
        else
        {
          this.style.backgroundColor = "lightyellow";
          resetButton();
        }
       
        showLetters();
      }

    });
  }
}

function createToggle()
{
  let buttonLetters = document.querySelectorAll('#user-letters .letter');
  let buttonToggle = [];
  for(let i = 0; i < buttonLetters.length; i++)
  {
    buttonToggle[i] = true;
  }
  return buttonToggle;
} 

function resetToggle()
{
  for(let i = 0; i < toggle.length; i++)
  {
    toggle[i] = true;
  }
}

function resetLetterBar()
{
  letterContainer = [];
  letterSelectedmax();
  showLetterBar();
}

function resetButton()
{
  resetToggle();
  resetLetterBar();
  show_togglecolor();
}

function showLetterBar()
{
  // store the DOM element with the class #UI_points on the UI_points variable.
  let letterSelected = document.querySelector("#letterSelected");
  // refresh the UI.
  letterSelected.innerHTML = "";
}

function showLetters()
{
  let curLetters = document.querySelector('#letterSelected');
  let stringLetter = "";
  for(let i = 0; i < letterContainer.length; i++)
  {
    stringLetter += letterContainer[i];
  }
  curLetters.innerHTML = stringLetter;
  if(letterContainer.length == realColors[level].length && stringLetter == realColors[level])
  {
    winningConditions(curLetters, stringLetter);
  }
  else if(letterContainer.length == realColors[level].length && stringLetter != realColors[level])
  {
    resetButton();
  }
}

function showLettersHint()
{
  
  let cur_hintLetters = document.querySelector('#hintSelected');
  let hintLetter = "";
  
  
  if(hintContainer.length <= realColors[level].length && hintLetter <= realColors[level])
  {
    for(let i = 0; i < hintContainer.length; i++)
    {
      hintLetter += hintContainer[i];
    }
    cur_hintLetters.innerHTML = hintLetter;
  }
  else
  {
    alert("Il nome del colore è già stato rivelato, per questo livello non può più essere usato questo hint!");
    points += hintLetterCost;
  }
  showPoints();
}

function check_gameover()
{
  if(level >= maxLevel)
  {
    alert("Ce l'hai fatta! Adesso i colori e le lettere verranno rimescolate! Punteggio: " + points + "!");
    window.location.reload(true);
  }
  console.log("Level: " + level + " realColors.length: " + realColors.length);
}

function winningConditions(curLetters, stringLetter)
{
    
    givePoints();
    level++;
    giveLetters(nameColors);
    showColor();
    showLevel();
    resetButton();
    resetHints();
    check_gameover();
    save();
}

function skipLevel()
{
  //store the string of the result of the level for calculate the result in points.
  let levelLetters = realColors[level];
  //calculate the result based on the letters of the level result multiplying it with the const containing the amount of points per letter.
  let pointsObtained = levelLetters.length * pointsPerLetter;

  let skipPoints = Math.round((pointsObtained / 100) * 9);
  if(confirm("Stai per saltare questo livello per ottenere " + skipPoints + " punti. Sei sicuro di questa scelta?"))
  {
    
    level++;
    points += skipPoints;
    showLevel();
    giveLetters(nameColors);
    showColor();
    resetButton();
    resetHints();
    check_gameover();
    save();
  }
}

function resetVariables()
{
  level = 0;
  showLevel();
  points = 0;
  showPoints();
  resetHints();
}

function hintLetterButton()
{
  if(confirm("Vuoi vedere una lettera del colore che devi indovinare? Sono " + hintLetterCost + " Punti!"))
  {
    if(points >= hintLetterCost)
    {
      points -= hintLetterCost;
      initialHint();
    }
    else
    {
      alert("non hai i Punti!");
    }
  }
}

function initialHint(bool)
{
  hintContainer.push(realColors[level][hintsUsedLetter]);
  showLettersHint();
  hintsUsedLetter++;
  save();
}

function resetHints()
{
  hintsUsedLetter = 0;
  hintsUsedShuffle = 0;
  hintContainer = [];
  showLettersHint();
}

function refreshUI()
{
 // refresh the level UI.
 showLevel();
 // refresh the points UI.
 showPoints();
// give the starting color to discovery to the main color button.
 showColor();
 // give the letters to every button without letters on the board or refresh it.
 giveLetters(nameColors);
 //show every hint letter you used even if you leave the game.
 showLettersHint();

 letterSelectedmax();

 show_togglecolor();
}

function resetSave()
{
  if(confirm("Attenzione! Stai per cancellare i dati della partita. Vuoi comunque ricominciare da zero?"))
  {
    localStorage.clear();
    window.location.reload(true);
  }
}

function hintShuffle()
{
  if(confirm("Per " + hintShuffleCost + " Punti puoi scombinare le lettere. Vuoi farlo?"))
  {
    if(points >= hintShuffleCost)
    {
      points -= hintShuffleCost;
      hintsUsedShuffle++;
      nameColors[level] = shuffle(nameColors[level]);
      refreshUI();
    }
    else
    {
      alert("Non hai i punti!");
    }
  }
  
}



let givenStr = "celeste";
    
    let ch = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z','w','x','k','y','j'];
    let shuffleLetters = [];
    
    for(let i = 0; i < givenStr.length; i++)
    {
      for(let j = 0; j < ch.length; j++)
      {
        if(givenStr.charAt(i) == ch[j])
        {
        console.log("Trovato: " + ch[j]);
        shuffleLetters.push(ch[j]);
        }
      }
    }
    shuffleResult =  [...new Set(shuffleLetters)];
    console.log(shuffleResult);

var testArray = ["restfehclaeq", "babblabilcads"];
let stringReplace = "";
/*
  var re = new RegExp(shuffleResult.join("|"), "gi");
  console.log(re);
*/

//shuffleResult = new RegExp

for(let i = 0; i < ch.length; i++)
{
  for(let j = 0; j < shuffleResult.length; j++)
  {
    if(!ch[i].includes(shuffleResult[j]) && !ch[i].includes(stringReplace[i]))
    {
      alert("ch[i]: ", ch[i]);
      stringReplace += ch[i];
      stringReplace += "|";
      console.log(stringReplace);
    }
  }
}

stringReplace = new RegExp(stringReplace, "gi");
//var res = str.replace(/c|e|l|s|t|/gi, "");
res = testArray[0].replace(stringReplace, '');
console.log(res);
res = testArray[1].replace(/[^c|e|l|s|t]/gi, '');
console.log(res);

