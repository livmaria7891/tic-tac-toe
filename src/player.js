import Board from 'board.js';
import Game from 'game.js';

function Player(){
  console.log('player created')
  this.name = "Player"
  this.char = null
}

Player.prototype.setName = function(name){
  if(typeof name == 'string'){
    this.name = name;
  }else{
    throw "Name must be a string"
  }
}

Player.prototype.setCharacter = function(char){
  if(char == 'x' || char == 'o'){
    this.char = char;
  } else {
    throw Error;
  }
}

Player.prototype.setStatus = function(activeStatus){
  if(typeof activeStatus == 'boolean'){
    this.active = activeStatus;
  }else{
    throw "setStatus only takes booleans as arguments"
  }
}

Player.prototype.toggleActive = function(){
  this.active = !this.active;
}



export default Player;
// var Player = require('player').default;
// var player = new Player();
