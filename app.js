const h1 = document.querySelector('h1');
const type =  document.getElementById('type');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');
const btn = document.getElementById('button');

async function randomJokes() {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
    const jokes = await response.json()
    type.innerText = jokes.type.toUpperCase();;
    setup.innerText = jokes.setup;
    punchline.innerText = jokes.punchline
  }
const emojis = ['\u{1F600}', '\u{1F601}', '\u{1F602}', '\u{1F603}', '\u{1F604}' , '\u{1F604}' , '\u{1F605}'];
  btn.addEventListener('click',function(e){
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    h1.textContent = randomEmoji;
    randomJokes();  
  })
  randomJokes();
  //EMOJIS
//&#128513 &#128077 &#128514 &#128515 &#128517 &#128518 &#128519 &#128520 &#128521 &#128522 &#128523 &#128526 &#128527 &#128528 &#128529 &#128530 &#12853 &#128533