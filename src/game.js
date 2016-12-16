import Board from 'board.js';
import Player from 'player.js';

var Game = function(){

  this.active = false;
  this.numberOfPlays = 0;
  this.board = new Board();
  this.gameBoard = this.board.gameBoard;
  this.player1 = new Player();
  this.player2 = new Player();


  //this function controls game flow
  // this.play = function(){
  //   this.chooseFirstPlayer();
  //   while(active){
  //
  //   }
  // };

  this.chooseFirstPlayer = function(){
    var player1 = this.player1
    var player2 = this.player2
    if(Math.floor(Math.random()*2)){
      player1.setCharacter('x')
      player1.setStatus(true);
      player2.setCharacter('o');
      player2.setStatus(false);
    }else{
      player2.setCharacter('x');
      player2.setStatus(true);
      player1.setCharacter('o');
      player1.setStatus(false);
    }
  }

};


export default Game;

// var Game = require('game').default;
// var game = new Game();
