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
}

//creiamo il singolo blocco con 2 parametri-idAtt identifica il blocco
function createBlock(idAtt, blockEls){
  const block = document.createElement('div');
  block.className = 'block';
  block.classList.add('block'+blockEls)
  block.idAtt = idAtt;
  block.innerHTML = `${idAtt}`;
  // block.addEventListener('click', handelBlock);
  return block;
}
// generiamo la griglia mandando in loop createBlock e stampando in pagina
function generateGrid(blockEls){
  
  for (let i = 1; i <= blockEls ; i++) {
    const cell = createBlock(i, blockEls);
    playField.append(cell);
  }
}
