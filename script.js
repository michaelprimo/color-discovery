//COLOR DISCOVERY

//set the actual level of the game.
let level = 0;
//set the points you have earned.
let points = 0;
//this const decide of much points give to the player for every color finded. 
const pointsPerLetter = 100;
//list of the real names of the colors.
let realColors = ['lavanda','magenta','rosa','melanzana','tronco','castagno','anguria','salmone','aragosta','corallo','azalea','ciliegia','rosso','bordeaux','platino','conchiglia','grano','pesca','arancione','oro','mogano','avorio','beige','albicocca','carbone','rame','zafferano','cioccolato','limone','giallo','verde','acquamarina','giada','antracite','ardesio','celeste','azzurro','magnolia','blu','lilla','glicine','orchidea','ametista','viola','indaco','prugna','bianco','grigio','nero','ciano'];
//list of the edited names of the colors.
let nameColors = ['lavanda','magenta','rosa','melanzana','tronco','castagno','anguria','salmone','aragosta','corallo','azalea','ciliegia','rosso','bordeaux','platino','conchiglia','grano','pesca','arancione','oro','mogano','avorio','beige','albicocca','carbone','rame','zafferano','cioccolato','limone','giallo','verde','acquamarina','giada','antracite','ardesio','celeste','azzurro','magnolia','blu','lilla','glicine','orchidea','ametista','viola','indaco','prugna','bianco','grigio','nero','ciano'];
//list of the real colors to put on the center, to the #color div.
let levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85','#ff8c69','#ed7465','#ff7f50','#d3305d','#de3163','#ff0000','#800000','#e5e4e2','#fff5ee','#f5deb3','#ffe5b4','#ffa500','#ffd700','#c04000','#fffff0','#f5f5dc','#fbceb1','#050402','#b87333','#f4c430','#d2691e','#fde910','#ffff00','#00ff00','#7fffd4','#00a86b','#293133','#708090','#99cbff','#007fff','#f8f4ff','#0000ff','#c8a2c8','#c9a0dc','#da70d6','#884da7','#8f00ff','#4b0082','#660066','#ffffff','#808080','#000000','#00ffff'];
//this array contains the letters of the players.
let letterContainer = [];
// this toggle allows the game to find any button if it's clicked or not.
let toggle = createToggle();

let hints = 0;

// give a event listener to every button with a letter.
giveLettersClick();
//call every function that initialize the game.
init();

alert("Benvenuto in Color Discovery! Ci sono dei colori in centro e devi usare le lettere attorno per scrivere il nome di quel colore. Riuscirai a terminare tutti i 50 livelli?")

//the function allow the game to start and initialize.
function init()
{
  show_togglecolor();
  resetVariables();
  // refresh the level UI.
  showLevel();
  // refresh the points UI.
  showPoints();
  // This allows to create a "seed" for every game and play.
  shuffleArray(nameColors, levelColors, realColors);
  // Call the function which allows to randomize every string of nameColors.
  
  // give the letters to every button without letters on the board or refresh it.
  giveLetters(nameColors);
  // give the starting color to discovery to the main color button.
  getColor();
  randomizeString();
  letterSelectedmax();
  show_togglecolor();
}

function letterSelectedmax()
{
  let letterSelected = document.querySelector("#letterSelected");
  letterSelected.style.width = "" + 40 * realColors[level].length + "px";
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


function getColor()
{
    let guessingColor = document.querySelector('#user-letters #color');
    guessingColor.style.backgroundColor = levelColors[level];
}

function randomizeString()
{
    let randomChar;
/*
    for(var i = 0; i < nameColors.length; i++)
    {
        for(var j = nameColors[i].length; j < 12; j++)
        {
            randomChar = Math.floor(Math.random() * 26) + 97;
            nameColors[i] = nameColors[i] + String.fromCharCode(randomChar);
        }
*/
        nameColors[i] = shuffle(nameColors[i]);
        console.log(nameColors[i], "/", levelColors[i]);
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

function check_gameover()
{
  if(level >= realColors.length-1)
  {
    alert("Ce l'hai fatta! Adesso i colori e le lettere verranno rimescolate! Punteggio: " + points + "!");
    window.location.reload(true);
  }
  console.log("Level: " + level + " realColors.length: " + realColors.length);
}

function winningConditions(curLetters, stringLetter)
{
    check_gameover();
    givePoints();
    level++;
    giveLetters(nameColors);
    getColor();
    showLevel();
    resetButton();
    
}

function skipLevel()
{
  check_gameover();
  level++;
  showLevel();
  giveLetters(nameColors);
  getColor();
  resetButton();
  
}

function resetVariables()
{
  level = 0;
  showLevel();
  points = 0;
  showPoints();
}
