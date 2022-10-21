/*
-bottone Play  
  -inizia Griglia

  -inizia Blocco
    -ogni Blocco ha un proprieta ID
    -16 blocchi hanno una bomba attravero id randomico
    -evento che gestisce il click del blocco
      -il click prende la proprieta ID del blocco

  -Stampa Blocco in griglia in base alla difficolta
*/
//prendiamo il play button
const playBtn = document.querySelector('#playBtn');

//prendiamo il playfield dal dom
const playField = document.querySelector('.play-field');

//settiamo la difficolta con un Array
let setDiff = document.getElementById('difficulty');
const diffArr = [100, 81, 49];

console.log(setDiff.value);

//settiamo il numero di bombe globali
const BOMBS_NUMS = 16;
let bombs = [];
let score = 0;

//usiamo il playBtn per iniziare il gioco
playBtn.addEventListener('click', init);
//init il gioco
function init(){

  let diffSet = diffArr[setDiff.value];
  generateGrid(diffSet);
  generateBombs(diffSet);
}

//creiamo il singolo blocco con 2 parametri-idAtt identifica il blocco
function createBlock(idAtt, blockEls){
  const block = document.createElement('div');
  block.className = 'block';
  block.classList.add('block'+blockEls)
  block.idAtt = idAtt;
  block.innerHTML = `${idAtt}`;
  block.addEventListener('click', handleBlock);
  return block;
}

//gestiamo il click del blocco con handleBlock
function handleBlock(){
  console.log(this.idAtt);
  
}

//funzione per generare le bombe
function generateBombs(blockEls){
  //creo array per pushare le bombe generate
  const bombsGenerated = [];
  //variabile da definire nel ciclo
  let bomb;
  //fino a che la lunghezza di bombe generate non e uguale o min del numero di bombe ripeti
  while(bombsGenerated.length <= BOMBS_NUMS){
    //genera un num random da salvare in bomb
    bomb = generateRandomNumber(1, blockEls);
    //se il numero saltato fuori da bomb non e dentro l'array di bombe generate allora pushalo
    if(!bombsGenerated.includes(bomb)){
      bombsGenerated.push(bomb);
    }

  }
  console.log("-----------", bombsGenerated);

}


// generiamo la griglia mandando in loop createBlock e stampando in pagina
function generateGrid(blockEls){
  
  for (let i = 1; i <= blockEls ; i++) {
    const cell = createBlock(i, blockEls);
    playField.append(cell);
  }
}

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
