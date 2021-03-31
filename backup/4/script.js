/*
const list_levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85'];
const list_nameColors = ['lavanda', 'magenta','rosa','melanzana','tronco','castagno','anguria'];
*/

let level = 0;
let realColors = ['lavanda','magenta','rosa','melanzana','tronco','castagno','anguria'];
let nameColors = ['lavandaccccc', 'magenta','rosa','melanzana','tronco','castagno','anguria'];
let levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85'];
let letterContainer = [];


function getColor()
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
      letterContainer.push(buttonLetters[j].textContent);
      showLetters();
    });
  }

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
  winningConditions(curLetters, stringLetter);
}

function winningConditions(curLetters, stringLetter)
{
  if(stringLetter == realColors[level])
  {
    alert("hai vinto");
    level++;
    giveLetters(nameColors);
    getColor();
    letterContainer = [];
  }
}

giveLettersClick();
shuffleArray(nameColors, levelColors, realColors);
randomizeString();
giveLetters(nameColors);
getColor();