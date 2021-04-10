//COLOR DISCOVERY

//set the actual level of the game.
let level = 0;
//set the points you have earned.
let points = 0;
//this const decide of much points give to the player for every color finded. 
const pointsPerLetter = 100;


let arr = ["1", "2", "3", "4", "5"];

//list of the real names of the colors.
let realColors = [];

let easy_realColors = ['lavanda','magenta','rosa','salmone','ciliegia','rosso','bordeaux','platino','pesca','arancione','oro','mogano','avorio','beige','albicocca','carbone','rame','zafferano','cioccolato','limone','giallo','verde','acquamarina','giada','celeste','azzurro','magnolia','blu','lilla','ametista','viola','indaco','prugna','bianco','grigio','nero','ciano','lampone','fucsia','porpora','rubino','seppia','marrone','crema','pera','limone','lime','giada','turchese','argento'];
let normal_realColors = ['melanzana','tronco','castagno','anguria','aragosta','corallo','azalea','conchiglia','grano','glicine','orchidea','malva','cremisi','granata','scarlatto','vermiglio','isabella','camoscio','sabbia','bronzo','ambra','mandarino','asparago','pistacchio','fiamma','fiordaliso','acqua','alice','bondi','cadetto','capri','cielo','klein','colomba','menta','notte','cenere','ottone','oliva','fragola','mattone','violaceo','fuoco','pomodoro','foresta','smeraldo','topo','muschio','pino','violetto'];
let hard_realColors = ['antracite','denim','vinaccia','amaranto','carminio','sangria','borgogna','lino','papaya','biscotto','kaki','catrame','tan','ecru','bistro','fulvo','ocra','solidago','olivina','chartreuse','celadon','ceruleo','ardesia','avio','cobalto','pervinca','cardo','eliotropo','gainsboro','scuolabus','savoia','dodger','oltremare','mountbatten','shocking','cardinale','pompeiano','tiziano','veneziano','caraibi','primavera','veronese','fantasma','floreale','fumo','navajo','polvere','napoli','segnale','ufficio'];
//list of the edited names of the colors.
let nameColors  = [];

let easy_nameColors  = [...easy_realColors];
let normal_nameColors  = [...normal_realColors];
let hard_nameColors  = [...hard_realColors];
//list of the real colors to put on the center, to the #color div.
let levelColors  = [];

let easy_levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#ff8c69','#de3163','#ff0000','#800000','#e5e4e2','#ffe5b4','#ffa500','#ffd700','#c04000','#fffff0','#f5f5dc','#fbceb1','#050402','#b87333','#f4c430','#d2691e','#fde910','#ffff00','#00ff00','#7fffd4','#00a86b','#99cbff','#007fff','#f8f4ff','#0000ff','#c8a2c8','#884da7','#8f00ff','#4b0082','#660066','#ffffff','#808080','#000000','#00ffff','#e30b5c','#f400a1','#b20000','#410012','#704214','#964b00','#fffdd0','#d1e231','#fde910','#ccff00','#00a86b','#30d5c8','#c0c0c0'];
let normal_levelColors = ['#990066','#79443b','#cd5c5c','#fc6c85','#ed7465','#ff7f50','#d3305d','#fff5ee','#f5deb3','#c9a0dc','#da70d6','#993366','#dc143c','#7b1b02','#ff2400','#ff4d00','#F4F0EC','#f0dc82','#f4a460','#cd7f32','#ffbf00','#ffcc00','#87a96b','#93c572','#ff9900','#abcdef','#256d7b','#f0f8ff','#0095b6','#5f9ea0','#00bfff','#2271b3','#3A75C4','#606e8c','#98FF98','#343A90','#E4E5E0','#CC9966','#898437','#CE3018','#B22222','#C71585','#A61022','#FF6347','#228b22','#50C878','#646B63','#ADDFAD','#01796F','#8000FF'];
let hard_levelColors = ['#293133','#1560bd','#c0007f','#e52b50','#960018','#92000a','#800020','#f4f0ec','#faf0e6','#ffefd5','#ffe4c4','#c3b091','#d2b48c','#c2b280','#3d2b1f','#ebb55f','#cc7722','#daa520','#9ab973','#7fff00','#ace1af','#007ba7','#708090','#5d8aa8','#0047ab','#ccccff','#d8bfd8','#df73ff','#dcdcdc','#FFD800','#6397d0','#1E90FF','#120A8F','#997A8D','#FC0FC0','#C41E3A','#D21F1B','#ba6262','#C80815','#00CC99','#00FF7F','#40826D','#F8F8FF','#FFFAF0','#F5F5F5','#FFDEAD','#B0E0E6','#F7E89F','#E5BE01','#008000'];


//this array contains the letters of the players.
let letterContainer = [];
// this toggle allows the game to find any button if it's clicked or not.
let toggle = createToggle();

const easy_levels = 10;
const easy_levels_stars = 3;

const normal_levels = 10;
const normal_levels_stars = 4;

const hard_levels = 10;
const hard_levels_stars = 5;

const maxLevel = easy_levels + normal_levels + hard_levels;

let hintsUsedLetter = 0;

let hintsUsedShuffle = 0;

let hintContainer = [];

const hintLetterCost = 100;
const hintShuffleCost = 50;

let stars = 3;
let totalStars = 0;
let recordStars = 0;

const stars_needed_for_S = 120;
const stars_needed_for_A = 110;
const stars_needed_for_B = 100;
const stars_needed_for_C = 90;
const stars_needed_for_D = 80;
const stars_needed_for_E = 70;
const stars_needed_for_F = 60;

const phrases = [
  "Ci sono dei colori in centro e devi usare le lettere attorno per scrivere il nome di quel colore. Riuscirai a terminare tutti i " + maxLevel + " livelli?"
];

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
  localStorage.setItem("stars", stars);
  localStorage.setItem("totalStars", totalStars);
  //localStorage.setItem("recordStars", recordStars);
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

  str = Number(localStorage.getItem("stars"));
  stars = str;

  str = Number(localStorage.getItem("totalStars"));
  totalStars = str;

  str = Number(localStorage.getItem("recordStars"));
  recordStars = str;

  refreshUI();
}





// give a event listener to every button with a letter.
giveLettersClick();
//call every function that initialize the game.
init();

//the function allow the game to start and initialize.
function init()
{
  stars = easy_levels_stars;

  // This allows to create a "seed" for every game and play.
  shuffleArray(easy_nameColors, easy_levelColors, easy_realColors);
  shuffleArray(normal_nameColors, normal_levelColors, normal_realColors);
  shuffleArray(hard_nameColors, hard_levelColors, hard_realColors);
  push_gameArray();
  
  show_togglecolor();
  resetVariables();
 
  
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
  
}

function push_gameArray()
{
  reset_gameArray();
  for(let i = 0; i < easy_levels; i++)
  {
    realColors.push(easy_realColors[i]);
    levelColors.push(easy_levelColors[i]);
  }
  for(let i = 0; i < normal_levels; i++)
  {
    realColors.push(normal_realColors[i]);
    levelColors.push(normal_levelColors[i]);
  }
  for(let i = 0; i < hard_levels; i++)
  {
    realColors.push(hard_realColors[i]);
    levelColors.push(hard_levelColors[i]);
  }
  nameColors = [...realColors];
}

function reset_gameArray()
{
  nameColors = [];
  levelColors = [];
  realColors = [];
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

//show the current points obtained on the UI
function showStars()
{
  // store the DOM element with the class #UI_points on the UI_points variable.
  let UI_points = document.querySelector("#UI_stars");
  // refresh the UI.
  UI_points.innerHTML = 'Stelle ' + stars + "";
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

function giveStars()
{
  totalStars += stars;
  console.log(stars);
  if(level >= easy_levels+normal_levels-1 && level <= maxLevel)
  {
    stars = hard_levels_stars;
  }
  else if(level >= easy_levels-1 && level <= maxLevel-easy_levels+normal_levels)
  {
    stars = normal_levels_stars;
  }
  else
  {
    stars = easy_levels_stars;
  }
  
  showStars();
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
  showStars();
}

function check_gameover()
{
  if(level+1 > maxLevel)
  {
    let rank = giveRank();
    alert("Ce l'hai fatta! Adesso i colori e le lettere cambieranno di posizione! Stelle Totali: " + totalStars + "/" + ((easy_levels_stars * easy_levels) + (normal_levels_stars * normal_levels) + (hard_levels_stars * hard_levels))  + "! Il tuo grado è: " + rank + "!");
    if(totalStars > recordStars)
    {
      recordStars = totalStars;
      localStorage.setItem("recordStars", recordStars);
    }
    totalStars = 0;
    localStorage.clear();
    init();
    window.location.reload(true);
  }
}

function winningConditions(curLetters, stringLetter)
{
  giveStars();
  level++;
  if(level >= maxLevel)
  {
    check_gameover();
  }
  else
  {
    giveLetters(nameColors);
    showColor();
    showLevel();
    resetButton();
    resetHints();
    check_gameover();
    save();
  }
}

function skipLevel()
{
  giveStars();
  level++;
  if(level >= maxLevel)
  {
    check_gameover();
  }
  else
  {
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
  showStars();
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

function initialHint()
{
  hintContainer.push(realColors[level][hintsUsedLetter]);
  showLettersHint();
  hintsUsedLetter++;
  save();
}

function resetHints()
{
  hintsUsedLetter = 0;
  hintContainer = [];
  showLettersHint();
}

function refreshUI()
{
 // refresh the level UI.
 showLevel();
 // refresh the points UI.
 showStars();
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
  resetButton();
  nameColors[level] = shuffle(nameColors[level]);
  refreshUI();
}

function hintDeleteLetters()
{
  resetButton();
  nameColors[level] = shuffle(realColors[level]);
  refreshUI();
  if(nameColors[level] == realColors[level])
  {
    nameColors[level] = shuffle(realColors[level]);
    refreshUI();
  }
  save();
}

function hintManager()
{
  if(stars >= 3)
  {
    if(confirm("Usando questo indizio vedrai una lettera del nome del colore a costo di una stella. Vuoi continuare?"))
    {
      stars--;
      initialHint();
    }
    
  }
  else if(stars == 2)
  {
    if(confirm("Usando questo indizio vedrai rimosse le lettere non incluse del nome del colore a costo di una stella. Vuoi continuare?"))
    {
      stars--;
      hintDeleteLetters();
    }
    
  }
  else if(stars == 1)
  {
    if(confirm("Usando questo indizio potrai saltare questo livello a costo di una stella. Vuoi continuare?"))
    {
      stars--;
      skipLevel();
    }
  }
  else
  {
    alert("Non hai abbastanza stelle per usare gli indizi!");
  }
}

function giveRank()
{
  if(totalStars >= 0 && totalStars  <= stars_needed_for_F)
  {
    return "F";
  }
  else if(totalStars > stars_needed_for_F && totalStars <= stars_needed_for_E)
  {
    return "E";
  }
  else if(totalStars > stars_needed_for_E && totalStars <= stars_needed_for_D)
  {
    return "D";
  }
  else if(totalStars > stars_needed_for_D && totalStars <= stars_needed_for_C)
  {
    return "C";
  }
  else if(totalStars > stars_needed_for_C && totalStars <= stars_needed_for_B)
  {
    return "B";
  }
  else if(totalStars > stars_needed_for_B && totalStars < stars_needed_for_A)
  {
    return "A";
  }
  else
  {
    return "S";
  }
}
/* modal in progress
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// Get the <span> element that closes the modal
var btnClose = document.getElementsByClassName("btnClose");

let welcomeModal = document.getElementById("myModal2");

welcomeModal.innerHTML = phrases[0];

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

btnClose[0].onclick = function() {
  modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function(event) 
{
  modal[1].style.display = "block";
}
*/