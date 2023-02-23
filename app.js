






var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');

function start() {
  var random = Math.floor(Math.random() * 9); // От 0 до 8
  cards_block.style.left = -random * 100 + 'px';
  setTimeout(function() {
    random++;
    cards[random].style.background = 'black';
    cards[random].style.color = 'red';
  }, 5000)
}