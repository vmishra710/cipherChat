
const letterToEmoji = {
    'a': '😀',
    'b': '😁',
    'c': '😂',
    'd': '🤣',
    'e': '😃',
    'f': '😄',
    'g': '😅',
    'h': '😆',
    'i': '😇',
    'j': '😉',
    'k': '😊',
    'l': '😋',
    'm': '😌',
    'n': '😍',
    'o': '😎',
    'p': '😏',
    'q': '😐',
    'r': '😑',
    's': '😒',
    't': '😓',
    'u': '😔',
    'v': '😕',
    'w': '😖',
    'x': '😗',
    'y': '😘',
    'z': '😙',
    'A': '😚',
    'B': '🙂',
    'C': '🙃',
    'D': '🙄',
    'E': '🤔',
    'F': '😪',
    'G': '😫',
    'H': '😴',
    'I': '😷',
    'J': '🤒',
    'K': '🤕',
    'L': '🤢',
    'M': '🤮',
    'N': '🤧',
    'O': '😇',
    'P': '🤠',
    'Q': '🤡',
    'R': '🤥',
    'S': '🤤',
    'T': '😈',
    'U': '👿',
    'V': '👹',
    'W': '👺',
    'X': '💀',
    'Y': '👻',
    'Z': '👽',
    '0': '👾',
    '1': '🤖',
    '2': '🎃',
    '3': '😺',
    '4': '😸',
    '5': '😹',
    '6': '😻',
    '7': '😼',
    '8': '😽',
    '9': '🙀',
    '.': '🙁',
    ',': '🤗',
    '!': '🤓',
    '?': '🤩',
    ':': '🧐',
    ';': '🥳',
    '-': '🥴',
    '+': '🥺',
    '/': '😤',
    '\\': '😢',
    '(': '😵',
    ')': '😲',
    '[': '🥵',
    ']': '🥶',
    '{': '🤬',
    '}': '🤯',
    '~': '🌙',
    '*': '🌟',
    '#': '💥',
    '$': '💰',
    '%': '🌼',
    '^': '🌞',
    '&': '🌈',
    '@': '💫',
    '_': '🧲',
    '-': '🥴',
    '+': '🥺',
    '=': '🔵',
    '|': '🍸',
    "'": '🌴',
    '"': '🍀',
    ':': '🧐',
    ';': '🥳',
    '?': '🤩',
    '/': '😤',
    '.': '🙁',
    '>': '➡️',
    '<': '⬅️',
    ',': '🤗',
  };

const emojiToLetter = {
    '😀': 'a',
    '😁': 'b',
    '😂': 'c',
    '🤣': 'd',
    '😃': 'e',
    '😄': 'f',
    '😅': 'g',
    '😆': 'h',
    '😇': 'i',
    '😉': 'j',
    '😊': 'k',
    '😋': 'l',
    '😌': 'm',
    '😍': 'n',
    '😎': 'o',
    '😏': 'p',
    '😐': 'q',
    '😑': 'r',
    '😒': 's',
    '😓': 't',
    '😔': 'u',
    '😕': 'v',
    '😖': 'w',
    '😗': 'x',
    '😘': 'y',
    '😙': 'z',
    '😚': 'A',
    '🙂': 'B',
    '🙃': 'C',
    '🙄': 'D',
    '🤔': 'E',
    '😪': 'F',
    '😫': 'G',
    '😴': 'H',
    '😷': 'I',
    '🤒': 'J',
    '🤕': 'K',
    '🤢': 'L',
    '🤮': 'M',
    '🤧': 'N',
    '😇': 'O',
    '🤠': 'P',
    '🤡': 'Q',
    '🤥': 'R',
    '🤤': 'S',
    '😈': 'T',
    '👿': 'U',
    '👹': 'V',
    '👺': 'W',
    '💀': 'X',
    '👻': 'Y',
    '👽': 'Z',
    '👾': '0',
    '🤖': '1',
    '🎃': '2',
    '😺': '3',
    '😸': '4',
    '😹': '5',
    '😻': '6',
    '😼': '7',
    '😽': '8',
    '🙀': '9',
    '🙁': '.',
    '🤗': ',',
    '🤓': '!',
    '🤩': '?',
    '🧐': ':',
    '🥳': ';',
    '🥴': '-',
    '🥺': '+',
    '😤': '/',
    '😢': '\\',
    '😵': '(',
    '😲': ')',
    '🥵': '[',
    '🥶': ']',
    '🤬': '{',
    '🤯': '}',
    '🌙': '~',
    '🌟': '*',
    '💥': '#',
    '💰': '$',
    '🌼': '%',
    '🌞': '^',
    '🌈': '&',
    '💫': '@',
    '🧲': '_',
    '🥴': '-',
    '🥺': '+',
    '🔵': '=',
    '🍸': '|',
    '🌴': "'",
    '🍀': '"',
    '🧐': ':',
    '🥳': ';',
    '🤩': '?',
    '😤': '/',
    '🙁': '.',
    '➡️': '>',
    '⬅️': '<',
    '🤗': ',',
  };

  

//localStorage.clear()
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        var clutter = "";

       //getting input
       var input = document.getElementById("txtmsg").value
       console.log(input)

       //getting password
       var pass = document.getElementById("password").value
       console.log(pass)

       
      const inputString = input;

      for(let i = 0 ; i < inputString.length ; i++){
        const character = inputString[i];
        const emoji = letterToEmoji[character];

        if(emoji){
            clutter += emoji;
        }else{
            clutter += character;
        } 
      }
      console.log(clutter);

       //storing it in #result div
       document.querySelector("#result").innerHTML = clutter
       
       document.querySelector('#encrypt-btn').style.display = "none"

       var dataarr = [];

       if(JSON.parse(localStorage.getItem('data1'))){
        dataarr = JSON.parse(localStorage.getItem('data1'))
        console.log(dataarr)
        dataarr.push({"pass":pass, "input":input, "clutter":clutter})
       }else{
        dataarr = [{"pass":pass, "input":input, "clutter":clutter}]
       }

       localStorage.setItem('data1', JSON.stringify(dataarr))
    })
}



function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function(){
        var decryptedString = '';

        //getting the given emoji message
        var input2 = document.querySelector("#emojimsg").value

        //getting the password to decrypt
        var finalPass = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        const encryptedString = input2;

        for(let i = 0 ; i < encryptedString.length ; i++){
            const emoji = encryptedString[i];
            const letter = emojiToLetter[emoji];

            if(letter != undefined){
                decryptedString += letter;
            }else{
                decryptedString += emoji;
            }
        }
        console.log(decryptedString);

        
        var found = -1;
        for(let i of user){
            if(i.clutter == decryptedString && i.pass == finalPass){
                found = i
                console.log(i)
            }
        }

        if(found.clutter === decryptedString && found.pass == finalPass){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "#eee"
            document.querySelector("#result").innerHTML = found.input
        }else{
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.color = "red"
            document.querySelector("#result").innerHTML = "Wrong Credentials"
        }

    })
}



function btnClicking(){

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
    })

    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"

        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"

        document.querySelector("#result").style.display = "none"

        document.querySelector("#main>h1 span img").style.rotate = "180deg"
    })

    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"

        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"

        document.querySelector("#result").style.display = "none"

        document.querySelector("#main>h1 span img").style.rotate = "0deg"
    })
}


encryption();

decryption();

btnClicking();






















/*
LOCAL STORAGE BASIC OPERATIONS

localStorage.clear()
localStorage.setItem('username','Vaibhav')
localStorage.setItem('age','21')

var name = localStorage.getItem('username')
console.log(name)

var arr = ["Vaibhav", 21 , true , 'lab']
console.log(arr)

localStorage.setItem('array',arr)
localStorage.setItem('array', JSON.stringify(arr))

console.log(localStorage.getItem('array'))
console.log(JSON.parse(localStorage.getItem('array')))
*/
