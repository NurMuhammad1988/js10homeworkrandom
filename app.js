






// var cards_block = document.querySelector('.cards');
// var cards = document.querySelectorAll('.cards > div');

// function start() {
//   var random = + Math.floor(Math.random() * 33); // От 0 до 8
//   cards_block.style.left = -random * 33 + 'px';
//   setTimeout(function() {
//     random++;
//     cards[random].style.background = 'black';
//     cards[random].style.color = 'red';
//   }, 5000)
// }







var btn = document.getElementById("button");
var p = document.getElementById("p3");

btn.onclick = function(){
  var rand = 1 + Math.floor(Math.random() * 100);
  p.textContent = rand;
}