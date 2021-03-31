let levelColors = ['#e6e6fa','#ff00ff','#ffc0cb','#990066','#79443b','#cd5c5c','#fc6c85'];
let nameColors = ['lavanda', 'magenta','rosa','melanzana','tronco','castagno','anguria'];

function getColor(color)
{
    let guessingColor = document.querySelector('#user-letters #color');
    guessingColor.style.backgroundColor = levelColors[color];
    //guessingColor.innerHTML = "HTML";
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
        console.log(nameColors[i]);
    }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
 function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
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
  

shuffleArray(nameColors);
randomizeString();
getColor(6);