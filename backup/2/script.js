const list_levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85'];
const list_nameColors = ['lavanda', 'magenta','rosa','melanzana','tronco','castagno','anguria'];

let nameColors = list_nameColors;
let levelColors = list_levelColors;



function getColor(color)
{
    let guessingColor = document.querySelector('#user-letters #color');
    guessingColor.style.backgroundColor = levelColors[color];
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
 function shuffleArray(a, b) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
        [b[i], b[j]] = [b[j], b[i]];
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

  for(let j = 0; j < a[0].length; j++)
  {
    buttonLetters[j].innerHTML = a[0].charAt(j);
  }
  
}

function selectLetter(element)
{
  var parent = element.parentNode;
  var content = parent.querySelectorAll("div");
  alert(content.id);
}

shuffleArray(nameColors, levelColors);
randomizeString();
giveLetters(nameColors);
getColor(0);